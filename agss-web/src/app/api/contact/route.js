import { NextResponse } from "next/server";
import { getContainer } from "@/lib/cosmos";
import nodemailer from "nodemailer"; // 🌟 1. Import ไปรษณีย์ของเราเข้ามา

export async function POST(request) {
  try {
    // 1. แกะกล่องข้อมูลที่ส่งมาจากหน้าเว็บ
    const body = await request.json();
    const { fullName, email, phone, interests } = body;

    // 2. เช็คว่ากรอกข้อมูลสำคัญครบไหม (Validation)
    if (!fullName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 3. ปั้นข้อมูลเตรียมลง Database (Cosmos DB ชอบรูปแบบ JSON)
    const newLead = {
      fullName,
      email,
      phone: phone || "-", // ถ้าไม่กรอกเบอร์ให้ใส่ขีดไว้
      interests: interests || [], // Array ของ Checkbox ที่เลือก
      status: "New", // เอาไว้ทำระบบหลังบ้านต่อได้
      createdAt: new Date().toISOString(),
    };

    // 4. สั่งบันทึกลง Cosmos DB
    const container = await getContainer();
    await container.items.create(newLead);

    // 🌟 5. ตั้งค่าบุรุษไปรษณีย์ (ผูกกับ Gmail ของเราผ่านตัวแปร .env)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🌟 6. ร่างจดหมาย (ดึงตัวแปร fullName, email, phone มาแสดงให้สวยงาม)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // ส่งเข้าเมลตัวเอง (ถ้ามีเมลทีม Sales ก็เปลี่ยนตรงนี้ได้)
      subject: `🚨 [New Lead] ลูกค้าใหม่จากหน้าเว็บ: ${fullName}`,
      text: `
        มีลูกค้าใหม่สนใจบริการ DR Cloud System ครับ! 🎉
        -----------------------------------
        👤 ชื่อ-นามสกุล: ${fullName}
        📧 อีเมล: ${email}
        📞 เบอร์โทร: ${phone || "-"}
        🎯 ความสนใจ: ${interests && interests.length > 0 ? interests.join(", ") : "ไม่ได้ระบุ"}
        เวลาที่ติดต่อมา: ${new Date().toLocaleString('th-TH')}
        -----------------------------------
        กรุณาติดต่อกลับลูกค้าโดยเร็วที่สุด!
      `
    };

    // 🌟 7. สั่งร่อนจดหมาย!
    await transporter.sendMail(mailOptions);

    // 8. ส่งข้อความกลับไปบอกหน้าเว็บว่า "เรียบร้อย!"
    return NextResponse.json({ success: true, message: "Talk to an expert request received & Email sent!" }, { status: 201 });

  } catch (error) {
    console.error("DB/Email Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}