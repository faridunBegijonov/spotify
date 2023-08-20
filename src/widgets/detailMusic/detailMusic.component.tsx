import React, { FC, createRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../app";
import { IMusic, filterByTag, useGetAllMusic, useGetMusicById } from "../../shared";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AudioPlayer from "react-h5-audio-player";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { AppBarDetailMusic } from "../appBarDetailMusic";
import { CardSimilar, SimilarComponent } from "../../entities";
import { useQuery } from "react-query";
import axios from "axios";

export const DetailMusicComponent: FC = () => {
  const [allMusic, setAllMusic] = useState<IMusic[]>();
  const { id } = useParams();
  const { data, isError, isLoading } = useGetMusicById(Number(id));
  const { data: sim } = useQuery<IMusic[]>("music", async () => {
    const res = await axios.get("http://localhost:4200/music");
    return res.data;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const soundMus = data?.audio as string;
  const isSimilar = filterByTag(
    Array.isArray(allMusic) ? allMusic : [],
    data?.category as string,
  ).filter(mus => mus.id !== data?.id);

  useEffect(() => {
    if (Array.isArray(sim)) setAllMusic(sim);
  });

  useEffect(() => {
    document.title = data?.title as string;
    return () => {
      document.title = "Spotify - Web Player: Music for everyone";
    };
  });

  return (
    <Layout isPadding={false}>
      <div
        className={`	bg-gradient-to-t from-[#121212FF]  to-[#f8fafc] h-screen p-4`}
      >
        <AppBarDetailMusic />
        <div className="flex my-10 items-center">
          <img className="w-[232px] h-[232px] rounded-[8px]" src={data?.img} />
          <div className="ml-4">
            <h1 className=" text-[40px] font-bold">{data?.title}</h1>
            <p className="text-white/50 font-bold text-md">
              {data?.description}
            </p>
            <div className="flex items-start mt-4">
              <img
                className="w-[25px] h-[25px] rounded-full"
                src="/logo.jpeg"
                alt="Img"
              />
              <p className="font-bold block ml-2">
                Spotify - {data?.likes}лайков
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <IconButton>
            {isPlaying ? (
              <BookmarkIcon sx={{ fontSize: "35px" }} />
            ) : (
              <BookmarkBorderIcon sx={{ fontSize: "35px" }} />
            )}
          </IconButton>

          <IconButton>
            {isPlaying ? (
              <FavoriteIcon onClick={() => null} sx={{ fontSize: "35px" }} />
            ) : (
              <FavoriteBorderIcon
                onClick={() => null}
                sx={{ fontSize: "35px" }}
              />
            )}
          </IconButton>
        </div>
        <AudioPlayer autoPlay style={{ marginTop: "20px" }} src={soundMus} />
        <div className="mt-8">
          {isSimilar.length !== 0 ?
            <>
              <p className="text-xl font-bold mb-4">Похожие</p>
              {isSimilar.map((mus) => {
                return (
                  <div key={mus.id}>
                    <CardSimilar {...mus} />
                  </div>
                );
              })}
            </>
            : <p className="text-xl font-bold" >Нет похожие музики</p>}
        </div>
      </div>
    </Layout>
  );
};
