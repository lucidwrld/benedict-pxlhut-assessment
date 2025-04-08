import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("Received data:", data);
  
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return NextResponse.json({
    success: true,
    message: "Form submitted successfully",
    data,
  });
}