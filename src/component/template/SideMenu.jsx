import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../theme/theme";
import logo from "../../main_logo.png"

export const SideMenu = () => {


  return (
    <>
      <Wrap>
        <List>
          <Item>
            <img src={logo} alt="logo" />
          </Item>
          <Item>
            <Links to="/">Home</Links>
          </Item>
          <Item>
            <Links to="/portfolio">Portfolio</Links>
          </Item>
          <Item>
            <Links to="/about">About</Links>
          </Item>
        </List>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
    width: 250px;
    background-color:${theme.colors.backgroundColor};
    box-sizing: border-box;
    position: relative;
`;
const List = styled.ul`
    position: absolute;
    top: 100px;
    left: 50px;
`;
const Item = styled.li`
padding: 10px;
margin-bottom: 20px;
  img{
    width: 180px;
  }
`;
const Links = styled(NavLink)`

`;
