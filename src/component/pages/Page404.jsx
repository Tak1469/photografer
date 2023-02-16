
import React, { memo } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

export const Page404 = memo(() => {
  return (
    <MainWrap>
      <div>
        <h1>SORRY</h1>
        <p>404</p>
      </div>
    </MainWrap>
  );
});

const MainWrap = styled.div`
    flex: 1;
    & div {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      font-weight: bold;
      font-family: ${theme.fonts.mainFont};
      font-size: ${theme.fontSize.lg};
      & h1{
        margin-bottom: 20px;
      }
      & p{
        font-size: ${theme.fontSize.xl};
      }
    }
`;