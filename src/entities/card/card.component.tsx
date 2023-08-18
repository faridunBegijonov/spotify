import React, { FC } from "react";
import { IMusic } from "../../shared";
import { Link } from "react-router-dom";

export const CardComponent: FC<IMusic> = ({
  id,
  img,
  title,
  category,
  description,
}: IMusic) => {
  const titleMus: string[] = Array.from(title).slice(
    0,
    title.length >= 30 ? 15 : 25,
  );
  const descriptionMus: string[] = Array.from(description).slice(
    0,
    title.length >= 30 ? 35 : 25,
  );
  return (
    <Link to={`/music/${id}`}>
      <div className="bg-[#181818FF] rounded-[8px] transition-colors hover:bg-[#232323FF] p-4">
        <img src={img} alt="Img" className="w-full rounded-[8px] h-[158px]" />
        <h2 className="font-bold text-md my-2">
          {titleMus.length <= 25 ? titleMus : titleMus.concat("By Top Music")}
          ....
        </h2>
        <span className="text-sm">{descriptionMus} ....</span>
      </div>
    </Link>
  );
};
