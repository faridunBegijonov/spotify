import React, { FC } from "react";
import { ButtonComponent } from "../../shared/ui";
import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link } from "react-router-dom";

export const AppBarDetailMusic: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <Link
        to="/"
        className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#3D3D3DFF] cursor-pointer"
      >
        <KeyboardArrowLeftIcon />
      </Link>
      <div className="flex items-center">
        <ButtonComponent style="mr-4" color="white">
          Узнать больше о премиум
        </ButtonComponent>
        <ButtonComponent iconStart={<DownloadIcon />} color="dark-white">
          Устоновить приложение
        </ButtonComponent>
      </div>
    </div>
  );
};
