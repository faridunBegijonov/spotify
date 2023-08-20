import { IMusic } from "../types";

export const filterByTag = (arr: IMusic[], value: string) => {
  return arr.filter((mus) => {
    return mus.category === value;
  });
};

export const filterByLikes = (arr: IMusic[], value: number) => {
  return arr.filter((mus) => {
    return mus.likes >= value;
  });
};

export const filterForDel = (arr: IMusic[], value: number) => {
  return arr.filter((mus) => {
    return mus.id !== value;
  });
};