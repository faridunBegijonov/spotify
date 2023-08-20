import React, { FC } from "react";
import { filterByTag, useGetAllMusic } from "../../shared";
import { CardSimilar } from "../cardSimilar";

type SimilarType = {
  category: string;
};

export const SimilarComponent: FC<SimilarType> = ({
  category,
}: SimilarType) => {
  const { data } = useGetAllMusic();
  const similar = filterByTag(Array.isArray(data) ? data : [], category);
  console.log(similar);

  return (
    <>
      <p>Похожие</p>
      {similar.map((mus) => {
        return (
          <div key={mus.id}>
            <CardSimilar {...mus} />
          </div>
        );
      })}
    </>
  );
};
