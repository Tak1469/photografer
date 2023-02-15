import React, { memo } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { PortfolioImages } from "./PortfolioImages";

export const Portfolio = memo(() => {

  return (
    <>
      <MainWrap>
        <Title>Portfolio</Title>
        <SubTitle>01</SubTitle>
        <PortfolioImages
          word={"traveler"}
          pages={16}
          urls={"thumb"}
        />
        <SubTitle>02</SubTitle>
        <PortfolioImages
          word={"cats"}
          pages={8}
          urls={"thumb"}
        />
        <SubTitle>03</SubTitle>
        <PortfolioImages
          word={"couple"}
          pages={12}
          urls={"thumb"}
        />
      </MainWrap>
    </>
  );
});

const MainWrap = styled.div`
    flex: 1;
    padding-left: 20px;
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

const Title = styled.h2`
    font-size: ${theme.fontSize.lg};
    font-weight: bold;
    padding: 50px;
`;

const SubTitle = styled.h3`
  margin-bottom: 10px;
`;