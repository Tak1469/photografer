import react, { memo, useEffect } from "react";
import styled from "styled-components";
import { useGetImage } from "../../hooks/UseGetImage";

export const AboutImages = memo((props) => {

  const { word, pages, urls } = props;
  const { images, getImage } = useGetImage([]);

  useEffect(() => {
    getImage({ word: word, pages: pages, urls: urls });
  }, []);

  return (
    <>
      <MainWrap>
        {images.map((img, index) => (
          <FrontImage
            key={img.id}
            src={img.urls.regular}
            alt={img.alt_description}
          />
        ))}
      </MainWrap>
    </>
  );
});

const MainWrap = styled.div`
    flex: 1;
    display: grid;
    column-gap: 10px;
    row-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:  1fr 1fr ;
    padding: 10px;
    ${({ theme }) => theme.media.lg`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:  1fr 1fr;
    `}
    ${({ theme }) => theme.media.md`
    column-gap: 5px;
    row-gap: 5px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:  1fr 1fr;
    `}
`;

const FrontImage = styled.img`
    width: 150px;
    height: 100%;
    object-fit: cover;
    ${({ theme }) => theme.media.lg`
    width: 120px;
    `}
    ${({ theme }) => theme.media.md`
    width: 120px;
    `}
    ${({ theme }) => theme.media.sm`
    width: 80px;
    `}
`;
