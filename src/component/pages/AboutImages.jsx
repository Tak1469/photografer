import react, { memo, useEffect } from "react";
import styled from "styled-components";
import { useGetImage } from "../../hooks/UseGetImage";

export const AboutImages = memo((props) => {
  console.log('AboutImages');

  const { word, pages, urls } = props;
  const { images, getImage } = useGetImage([]);

  useEffect(() => {
    getImage({ word: word, pages: pages, urls: urls });
  }, []);
  console.log(images[0]);

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

const FrontImage = styled.img`
    width: 150px;
    height: 100%;
`;
const MainWrap = styled.div`
    flex: 1;
    display: grid;
    column-gap: 10px;
    row-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:  1fr 1fr 1fr;
`;
