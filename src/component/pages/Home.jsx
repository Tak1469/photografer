
import React, { memo } from "react";
import { HomeImage } from "./HomeImage";

export const Home = memo(() => {
  console.log('home');
  return (
    <>
      <HomeImage
        word={"dog"}
        pages={1}
        urls={"thumb"}
      />
    </>
  );
});


