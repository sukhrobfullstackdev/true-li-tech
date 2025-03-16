import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { name, phone, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required!" },
        { status: 400 }
      );
    }

    const contact = await Contact.create({ name, phone, message });

    return NextResponse.json({ success: true, contact }, { status: 201 });
  } catch (error) {
    console.error("❌ Error in /api/contact:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
