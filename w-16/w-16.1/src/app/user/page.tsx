import { authOption } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOption);
  return <div>{JSON.stringify(session)}</div>;
}
