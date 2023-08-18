import React, { FC } from "react";
import Slider from "react-slick";
import { settings } from "./slider.settings";
import { IMusic } from "../../shared";
import { SkeletonComponent } from "../../shared/ui";
import { CardComponent } from "../../entities";

type SliderType = {
  title: string;
  musics: IMusic[];
  style?: string;
  isLoading: boolean;
};

export const SliderComponent: FC<SliderType> = ({
  title,
  musics,
  style,
  isLoading,
}: SliderType) => {
  return (
    <div className={`${style}`}>
      <h1 className="mb-4 font-bold text-2xl">
        {!isLoading ? title : <SkeletonComponent height={18} width={250} />}
      </h1>
      <Slider {...settings}>
        {!isLoading
          ? musics?.map((music: IMusic) => {
              return (
                <div key={music.id} className="pr-2">
                  <CardComponent {...music} />
                </div>
              );
            })
          : Array(10)
              .fill("")
              .map((skeleton) => {
                return (
                  <div className="pr-2" key={Math.random()}>
                    <SkeletonComponent height={230} />
                  </div>
                );
              })}
      </Slider>
    </div>
  );
};
