import React, { memo } from "react";
import styled from "styled-components";
import { AboutImages } from "./AboutImages";
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
`;

const Title = styled.h2`
    font-size: x-large;
    font-weight: bold;
    margin: 50px 0px;
    padding-left:  30px;
`;

const SubTitle = styled.h3`
  margin-bottom: 10px;
`;