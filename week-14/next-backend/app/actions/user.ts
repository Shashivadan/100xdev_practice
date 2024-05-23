"use server";

import prisma from "../db/db";

export async function signup(username: string, password: string) {
  try {
    if (!username || !password) {
      return "parameter are not given";
    }
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
      },
    });

    if (!newUser) {
      return "user is not created";
    }

    return { newUser };
  } catch (e) {
    return "error" + e;
  }
}
