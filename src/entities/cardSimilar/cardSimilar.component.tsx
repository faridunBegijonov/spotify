import React, { FC, useState } from "react";
import { IMusic } from "../../shared";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const CardSimilar: FC<IMusic> = ({
  audio,
  category,
  description,
  id,
  img,
  likes,
  title,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Link target="_blank" to={`/music/${id}`}>
      <div className="flex items-center justify-between hover:bg-[#6A6A6AFF] px-4 py-2">
        <div className="flex items-center">
          <img src={img} alt="Img" className="w-[40px] h-[40px] mr-[16px]" />
          <div>
            <p className="text-sm">{title}</p>
            <p className="text-sm font-bold text-white/50 mt-1">{category}</p>
          </div>
        </div>
        <IconButton>
          {isPlaying ? (
            <FavoriteIcon onClick={() => null} sx={{ fontSize: "25px" }} />
          ) : (
            <FavoriteBorderIcon
              onClick={() => null}
              sx={{ fontSize: "25px" }}
            />
          )}
        </IconButton>
      </div>
    </Link>
  );
};
