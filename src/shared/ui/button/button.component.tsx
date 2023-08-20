import React, { FC, ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  color: "white" | "dark-white";
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  style?: string;
};

export const ButtonComponent: FC<ButtonType> = ({
  children,
  color,
  iconEnd,
  iconStart,
  style,
}: ButtonType) => {
  return (
    <button
      className={`${style} rounded-full h-[36px]  transition-transform hover:scale-105 font-bold py-2 px-4 text-sm ${
        color === "white" ? "bg-white text-black" : "bg-[#5F5F5FFF] text-white"
      }`}
    >
      <i className="mr-2">{iconStart}</i>
      {children}
      <i className="ml-2">{iconEnd}</i>
    </button>
  );
};
