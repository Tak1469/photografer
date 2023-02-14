import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../theme/theme";

export const SideMenu = () => {


  return (
    <>
      <Wrap>
        <List>
          <Item>
            <h1>logo</h1>
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

`;
const Links = styled(NavLink)`

`;
