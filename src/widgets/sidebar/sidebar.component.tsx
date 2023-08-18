import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { InputComponent, SelectComponent } from "../../shared/ui";

export const Sidebar: FC = () => {
  return (
    <div className="w-[30%] border-r-8 pt-4 border-[#000000FF] border-solid bg-[] fixed left-0 top-0 bottom-0 h-screen">
      <div className="border-b-8  border-[#000000FF] border-solid">
        <NavLink
          className="flex w-full px-8 py-4 mb-4 hover:bg-white/10 transition-colors items-center rounded-[4px]"
          to="/"
        >
          <HomeIcon sx={{ mr: 1 }} />
          Главная
        </NavLink>

        <NavLink
          className="flex w-full hover:bg-white/10 transition-colors items-center rounded-[4px] px-8 py-4"
          to="/search"
        >
          <SearchIcon sx={{ mr: 1 }} />
          Поиск
        </NavLink>
      </div>
      <div className="p-8">
        <div className="flex items-center text-white/50">
          <LibraryAddIcon sx={{ mr: 1 }} />
          <h2>Моя медиатека</h2>
        </div>
        <div className="flex mt-4 items-center justify-between">
          <InputComponent style="w-[200px]" callbackFn={() => null} />
          <SelectComponent
            callbackFn={() => null}
            title="Фильтр"
            width="w-[170px]"
            selection={[]}
          />
        </div>
      </div>
    </div>
  );
};
