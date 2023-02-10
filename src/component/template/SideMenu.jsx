import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/theme";

export const SideMenu = () => {


  return (
    <>
      <SideMenuWrap>
        <ul>
          <li>
            <h1>logo</h1>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </SideMenuWrap>
    </>
  );
}

const SideMenuWrap = styled.div`
  background-color: ${theme.colors.backgroundColor};
`;
