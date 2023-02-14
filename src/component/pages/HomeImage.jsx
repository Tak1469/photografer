import react, { memo, useEffect } from "react";
import styled from "styled-components";
import { useGetImage } from "../../hooks/UseGetImage";

export const HomeImage = memo((props) => {
  console.log('HomeImage');

  const { word, pages, urls } = props;
  const { images, getImage } = useGetImage([]);

  useEffect(() => {
    getImage({ word: word, pages: pages, urls: urls });
  }, []);

  return (
    <>
      <MainWrap>
        {images.map((img) => (
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

const FrontImage = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`;
const MainWrap = styled.div`
    flex: 1;
`;
