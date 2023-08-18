import React, { FC, ReactNode } from "react";
import { Sidebar } from "../../widgets";

type LayoutType = { children: ReactNode; isPadding?: boolean };

export const Layout: FC<LayoutType> = ({
  children,
  isPadding = true,
}: LayoutType) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className={`${isPadding ? "pl-[32%] p-8" : "pl-[30%]"} w-full`}>
        {children}
      </main>
    </div>
  );
};
