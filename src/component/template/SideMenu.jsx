import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhotoFilm,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

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
            <NavLink to="/"><FontAwesomeIcon icon={faHouse} /> <span>Home</span></NavLink>
          </Item>
          <Item>
            <NavLink to="/portfolio"><FontAwesomeIcon icon={faPhotoFilm} /> <span>Portfolio</span></NavLink>
          </Item>
          <Item>
            <NavLink to="/about"><FontAwesomeIcon icon={faAddressCard} /> <span>About</span></NavLink>
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

    ${({ theme }) => theme.media.md`
    width: 50px;
    `}
`;
const List = styled.ul`
    position: absolute;
    top: 100px;
    left: 50px;

    ${({ theme }) => theme.media.md`
    left: 10px;
    span {
      display:none;
    }
    `}
`;
const Item = styled.li`
padding: 10px;
margin-bottom: 20px;
  img{
    width: 180px;
  }
  ${({ theme }) => theme.media.md`
    padding: 0;
    img{
      display:none;
    }
  `}
`;
