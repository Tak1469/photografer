import react, { memo, useEffect } from "react";
import styled from "styled-components";
import { useGetImage } from "../../hooks/UseGetImage";

export const PortfolioImages = memo((props) => {
  console.log('PortfolioImages');

  const { word, pages, urls } = props;
  const { images, getImage } = useGetImage([]);

  useEffect(() => {
    getImage({ word: word, pages: pages, urls: urls });
  }, []);

  return (
    <>
      <MainWrap>
        {images.map((img, index) => (
          <PortfolioImage
            className="focus"
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
    margin-bottom: 30px;
    transition: 500ms;
    :hover{
      img{
        opacity: .5;
        z-index: -1;
      }
      } 
`;


const PortfolioImage = styled.img`
    width: 120px;
    height: 100px;
    object-fit: cover;
    transition: 500ms;
    
    :hover{
      &.focus{
        opacity: 1;
      }
      } 
`;