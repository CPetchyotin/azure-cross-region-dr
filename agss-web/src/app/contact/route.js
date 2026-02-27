import { NextResponse } from "next/server";
import { getContainer } from "@/lib/cosmos";

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

    // 5. ส่งข้อความกลับไปบอกหน้าเว็บว่า "เรียบร้อย!"
    return NextResponse.json({ success: true, message: "Talk to an expert request received!" }, { status: 201 });

  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}