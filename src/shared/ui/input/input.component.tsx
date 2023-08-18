import React, { FC, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

type InputType = {
  style: string;
  callbackFn: (value: string) => void;
};

export const InputComponent: FC<InputType> = ({
  style,
  callbackFn,
}: InputType) => {
  return (
    <div className="w-full relative ">
      <input
        className={`${style} w-full pl-10 p-2 rounded-[4px] bg-[#242424FF]  border-none outline-none`}
        type="text"
        placeholder="Search"
      />
      <i className="absolute top-[50%] translate-y-[-50%] left-2">
        <SearchIcon />
      </i>
    </div>
  );
};
