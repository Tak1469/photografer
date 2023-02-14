import React, { memo } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { AboutImages } from "./AboutImages";

export const About = memo(() => {


  return (
    <>
      <MainWrap>
        <Title>About</Title>
        <AboutDesc>
          <AboutDetails>
            <SubTitle>Masayoshi Oishi</SubTitle>
            <Lead>photographer in Tottori, Japan.</Lead>
            <DetailList>
              <DetailItem>鳥取生まれ</DetailItem>
              <DetailItem>大阪を拠点に活動</DetailItem>
              <DetailItem>自然や動物を主に撮影。最近は海洋生物に興味津々。</DetailItem>
            </DetailList>
          </AboutDetails>
          <AboutImageWrap>
            <AboutImageContainer
              word={"scenery"}
              pages={6}
              urls={"thumb"}
            />
          </AboutImageWrap>
        </AboutDesc>
      </MainWrap>
    </>
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
const AboutDesc = styled.div`
    display: flex;
`;
const Title = styled.h2`
    font-size: x-large;
    font-weight: bold;
    padding: 50px;
`;
const AboutDetails = styled.div`
    flex: 1;
    margin-left:  20px;
    font-size: ${theme.fontSize.sm};
    /* background-color: #ff6969; */
`;
const AboutImageWrap = styled.div`
    flex: 1;
`;
const AboutImageContainer = styled(AboutImages)`
    flex: 1;
`;
const SubTitle = styled.h3`
  margin-bottom: 10px;
`;
const Lead = styled.div`
  margin-bottom: 50px;
`;

const DetailList = styled.ul`
  margin-left: 20px;
`;

const DetailItem = styled.div`
  margin-bottom: 20px;
`;
