// "use client";

import Link from "next/link";

import prisma from "./db/db";

export async function getUserDetails() {
  try {
    const user = await prisma.user.findFirst();
    return {
      name: user?.username,
      email: "shashivadan99@gmail.com",
    };
  } catch (error) {
    console.log(error);
  }
}

export default async function () {
  const userData: any = await getUserDetails();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" shadow-2xl bg-slate-200 rounded-lg p-6">
          <div>{userData.name}</div>
          <span>{userData.email}</span>
        </div>
        <Link href={"/signup"}>signup</Link>
      </div>
    </>
  );
}
