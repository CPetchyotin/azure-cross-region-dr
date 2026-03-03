import { NextResponse } from "next/server";
import { getContainer } from "@/lib/cosmos";
import { Resend } from "resend";

// เรียกใช้ Resend ด้วย API Key จาก .env
const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHTML = (str) => {
  if (!str) return "";
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[tag] || tag,
  );
};

export async function POST(request) {
  try {
    const body = await request.json();

    const fullName = escapeHTML(body.fullName);
    const email = escapeHTML(body.email);
    const phone = escapeHTML(body.phone || "-");
    const interests = Array.isArray(body.interests)
      ? body.interests.map(escapeHTML)
      : [];

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 1. บันทึกลง Cosmos DB
    const newLead = {
      fullName,
      email,
      phone,
      interests,
      status: "New",
      createdAt: new Date().toISOString(),
    };
    const container = await getContainer();
    await container.items.create(newLead);

    // 2. ยิง API สั่ง Resend ส่งอีเมล (ไม่ต้องใช้รหัสผ่าน Gmail แล้ว!)
    await resend.emails.send({
      from: "AGSS <onboarding@resend.dev>", // อีเมลต้นทางฟรีของ Resend สำหรับเทสต์
      to: "bosschonnanut@gmail.com", // ใส่อีเมลจริงของคุณที่จะรับการแจ้งเตือน
      subject: "🚨 [AGSS] แจ้งเตือนลูกค้าใหม่เข้า Cosmos DB!",
      html: `
        <h2>🚀 มีข้อมูลใหม่เข้า Cosmos DB</h2>
        <p><strong>ชื่อ:</strong> ${fullName}</p>
        <p><strong>อีเมล:</strong> ${email}</p>
        <p><strong>เบอร์โทร:</strong> ${phone}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
