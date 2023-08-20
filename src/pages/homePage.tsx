import React, { FC } from "react";
import { Layout } from "../app";
import { SliderComponent } from "../features";
import { filterByLikes, filterByTag, useGetAllMusic } from "../shared";

export const HomePage: FC = () => {
  const { data, isLoading, isError } = useGetAllMusic();
  const top = filterByLikes(Array.isArray(data) ? data : [], 1000)
  const pop = filterByTag(Array.isArray(data) ? data : [], "Рэп")
  return (
    <Layout>
      <SliderComponent
        isLoading={isLoading}
        title="В топе"
        musics={top?.length ? top : []}
      />
      <SliderComponent
        title="Рэп"
        musics={pop?.length ? pop : []}
        isLoading={isLoading}
        style="mt-6"
      />
      <SliderComponent
        title="Новые хити"
        musics={data?.length ? data : []}
        isLoading={isLoading}
        style="mt-6"
      />
    </Layout>
  );
};
