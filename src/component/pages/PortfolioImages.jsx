import react, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { useGetImage } from "../../hooks/UseGetImage";
import { CSSTransition } from "react-transition-group";


export const PortfolioImages = memo((props) => {
  // imgのprops内容
  const { word, pages, urls } = props;
  // apiで画像を取得する関数をセット
  const { images, getImage } = useGetImage([]);
  // モーダルの開閉
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageData, setModalImageData] = useState([]);

  useEffect(() => {
    // apiで画像を取得する関数
    getImage({ word: word, pages: pages, urls: urls });
  }, []);

  // クリックでモーダル発火
  const onclick = (imgData) => {
    setModalOpen(!modalOpen);
    setModalImageData(imgData);
  }


  return (
    <>
      <MainWrap>
        {images.map((img, index) => (
          <PortfolioImage
            className="focus"
            key={img.id}
            src={img.urls.regular}
            alt={img.alt_description}
            onClick={() => onclick(img)}
          />
        ))}
      </MainWrap>
      <ModalWrap>
        <CSSTransition
          classNames="modal"
          in={modalOpen}
          timeout={700}
          unmountOnExit
        >
          <ModalStyle>
            <div className="content">
              <img className="modalImage" src={modalImageData.urls?.regular} alt={modalImageData.alt_description} />
            </div>
            <div className="close" onClick={() => (setModalOpen(!modalOpen))}>close</div>
          </ModalStyle>
        </CSSTransition>
      </ModalWrap>
      <OverlayWrap>
        <CSSTransition
          classNames="overlay"
          in={modalOpen}
          timeout={700}
          unmountOnExit
        >
          <span></span>
        </CSSTransition>
      </OverlayWrap>
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

const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  .modal-enter {
      opacity: 0;
      transform: scale(0.9);
    }
 
    .modal-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 0.3s, transform 0.3s;
    }
 
    .modal-exit {
      opacity: 1;
    }
 
    .modal-exit-active {
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;
      transform: scale(0.9);
    }

`;

const ModalStyle = styled.div`
  position: relative;
  padding: 50px 50px 0 50px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content{
    font-size: 40px;
    font-weight: bold;
  }
  
  .close{
    cursor: pointer;
    margin: 50px 0;
  }
  .modalImage{
    width: 100%;
    margin: 0 auto;
  }
`;

// オーバーレイのスタイル
const OverlayWrap = styled.div`
span{
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

}
  .overlay-enter {
    opacity: 0;
  }

  .overlay-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.3s, transform 0.3s;
  }

  .overlay-exit {
    opacity: 1;
  }

  .overlay-exit-active {
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }
`;