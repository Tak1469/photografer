
import React, { memo } from "react";
import styled from "styled-components";
import { HomeImage } from "./HomeImage";

export const Home = memo(() => {
  return (
    <MainWrap>
      <HomeImage
        word={"dog"}
        pages={1}
        urls={"thumb"}
      />
    </MainWrap>
  );
});

const MainWrap = styled.div`
    flex: 1;

    animation-name:fadeDownAnime;
    animation-duration:500ms;
    animation-fill-mode:forwards;
    animation-delay: 500ms;
    opacity:0;

    @keyframes fadeDownAnime{
      from {
        opacity: 0;
      transform: translateY(-100px);
      }

      to {
        opacity: 1;
      transform: translateY(0);
      }
    }
`;