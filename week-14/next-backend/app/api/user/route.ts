import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import prisma from "@/app/db/db";

export async function POST(req: NextRequest) {
  try {
    const { username, password }: { username: string; password: string } =
      await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "username and password are not found" },
        { status: 403 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        username,
        password,
      },
    });

    if (!newUser) {
      return NextResponse.json(
        { message: "new user not created" },
        { status: 500 }
      );
    }

    return NextResponse.json({ newUser });
  } catch (error) {
    console.log("Interal server error : ", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
