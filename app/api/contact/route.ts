import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Method 1: Using Resend (recommended)
    // Install: npm install resend
    // Set up: https://resend.com/

    // Method 2: Using Nodemailer with Gmail
    // Install: npm install nodemailer
    // Set up Gmail App Password

    // Method 3: Using EmailJS (client-side only)
    // This is handled in the frontend component

    // For now, let's simulate a successful email send
    // In production, you would integrate with a real email service

    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json(
      {
        message: "Email sent successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}
