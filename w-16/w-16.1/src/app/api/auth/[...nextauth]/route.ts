import { authOption } from "@/lib/authOption";

import NextAuth from "next-auth";

const handler = NextAuth(authOption);

export const GET = handler;
export const POST = handler;
