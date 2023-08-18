import React from "react";
const width = window.innerWidth;
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export const settings = {
  infinite: false,
  speed: 1000,
  slidesToShow: width >= 600 ? 4.5 : 1.5,
  nextArrow: <ArrowForwardIosIcon />,
  prevArrow: <ArrowBackIosIcon />,
  slidesToScroll: width >= 600 ? 4 : 1,
  swipe: width >= 600 ? false : true,
};
