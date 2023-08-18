import axios from "axios";
import { useQuery } from "react-query";
import { IMusic } from "../types";

export const useGetAllMusic = () => {
  const { data, isLoading, isError } = useQuery<IMusic[]>(
    "musicAll",
    async () => {
      const res = await axios.get("http://localhost:4200/music");
      return res.data;
    },
  );
  return { data, isLoading, isError };
};
