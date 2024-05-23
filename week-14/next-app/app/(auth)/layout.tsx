import React, { ReactNode } from "react";

export default function ({ children }: { children: ReactNode }) {
  return (
    <>
      <div className=" text-center  border-b p-4">20% off. if you sign up </div>
      {children}
    </>
  );
}
