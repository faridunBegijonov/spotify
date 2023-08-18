import React, { FC } from "react";
import { Skeleton } from "@mui/material";

type SkeletonType = {
  height: number;
  width?: number;
};
export const SkeletonComponent: FC<SkeletonType> = ({
  height,
  width,
}: SkeletonType) => {
  return (
    <Skeleton
      variant="rectangular"
      width={width}
      height={height}
      sx={{ bgColor: "#8D949EFF" }}
    />
  );
};
