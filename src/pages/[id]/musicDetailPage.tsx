import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../app";
import { useGetMusicById } from "../../shared";
import { IconButton } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import useSound from "use-sound";

export const MusicDetailPage: FC = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetMusicById(Number(id));
  const [isPlaying, setIsPlaying] = useState(false);
  const soundMus = data?.audio as string;
  return (
    <Layout isPadding={false}>
      <div className="bg-music h-screen p-8">
        <div className="flex my-10 items-center">
          <img className="w-[232px] h-[232px] rounded-[8px]" src={data?.img} />
          <h1 className="ml-4 text-[50px] font-bold">{data?.title}</h1>
        </div>
        <div>
          <IconButton>
            {isPlaying ? (
              <StopCircleIcon onClick={() => null} sx={{ fontSize: "55px" }} />
            ) : (
              <PlayCircleFilledWhiteIcon
                onClick={() => null}
                sx={{ fontSize: "55px" }}
              />
            )}
          </IconButton>
        </div>
      </div>
    </Layout>
  );
};
