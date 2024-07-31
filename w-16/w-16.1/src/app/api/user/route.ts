import { authOption } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOption);

  console.log(session);

  return NextResponse.json({ session });
}
