import React, { FC, ReactNode } from "react";
import { Sidebar } from "../../widgets";

export const Layout: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="md:w-full pl-[32%] w-full p-8">{children}</main>
    </div>
  );
};
