import React, { FC, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type SelectType = {
  selection: string[];
  title: string;
  width: string;
  callbackFn: (value: string) => void;
};
export const SelectComponent: FC<SelectType> = ({
  selection,
  title,
  width,
  callbackFn,
}: SelectType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState(title);

  const callBack = (value: string) => {
    setValue(value);
  };
  return (
    <div
      className="relative text-white/50 cursor-pointer select-none"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex hover:text-white items-center">
        {value}
        <ArrowDropDownIcon sx={{ ml: 1, rotate: isOpen ? "180deg" : "" }} />
      </div>
      {isOpen && (
        <ul
          className={`${width} absolute rounded-[4px] p-1 translate-x-[-50%] left-[50%] bg-[#282828FF] top-[35px]`}
        >
          {selection.length === 0 && (
            <span className="px-4 py-2 font-bold">Пусто....</span>
          )}
          {selection.map((item) => {
            return (
              <li
                key={item}
                onClick={() => callBack(item)}
                className="rounded-[4px] hover:text-white text-sm hover:bg-white/10 px-4 py-2"
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
