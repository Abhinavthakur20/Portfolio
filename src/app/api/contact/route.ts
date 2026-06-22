import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill out all fields." },
        { status: 400 }
      );
    }

    // If key is not configured yet, notify the user/developer
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Contact form is not fully configured. Please define WEB3FORMS_ACCESS_KEY in your .env.local file." 
        },
        { status: 500 }
      );
    }

    // Submit to Web3Forms server-side (hiding the access key)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `New Portfolio Message from ${name}`,
        from_name: "Portfolio Contact Form",
      }),
    });

    const result = await response.json();
    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to send message." },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
