import React, { FC } from "react";
import { Layout } from "../app";
import { SliderComponent } from "../features";
import { useGetAllMusic } from "../shared";

export const HomePage: FC = () => {
  const { data, isLoading, isError } = useGetAllMusic();
  return (
    <Layout>
      <SliderComponent
        isLoading={isLoading}
        title="Новые хити"
        musics={data?.length ? data : []}
      />
      <SliderComponent
        title="Что то новенькое"
        musics={data?.length ? data : []}
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
