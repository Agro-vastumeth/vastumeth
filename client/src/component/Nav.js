import React from "react";
import styled from "styled-components";
import AppLogo from "../assets/bacgG.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <NavWrap>
      <LogoName src={AppLogo} />

      <NavEnd>
        <ModLink to="/about">
          <NavItem>about</NavItem>
        </ModLink>
        <ModLink to="/contact">
          <NavItem>contact</NavItem>
        </ModLink>
        <ModLink to="/collaborate">
          <NavItem>collaborate</NavItem>
        </ModLink>
        <ModLink to="/process">
          <NavItem>process</NavItem>
        </ModLink>
        <ModLink to="/crops">
          <NavItem>crops</NavItem>
        </ModLink>
        {/* <NavItem /> */}
      </NavEnd>
    </NavWrap>
  );
}

export default Nav;

const NavWrap = styled.nav`
  height: 15vh;
  display: inline-flex;
  position: relative;
  right: 0px;
  width: 100%;
  justify-content: space-between;

  // @media (max-width: 992px) {
  //   display: flex;
  // }
`;

const LogoName = styled.img`
  margin: 10px;
  margin-left: 60px;
  width: 180px !important;
  height: 100px !important;
  display: inline-block !important;

  // @media (max-width: 990px) {
  //   display: none;
  // }
`;

const NavEnd = styled.div`
  display: flex;
  width: fit-content;
  justify-content: space-around;
  flex-direction: vertical;
  align-items: center;
`;

const NavItem = styled.div`
  margin: 5px;
  padding: 20px;
  font-family: "Noto Sans", "Exo 2", Helvetica, sans-serif;
  color: #fff;
  transition: all 0.3s;
  font-size: 20px;

  &:hover {
    font-size: 25px;
    text-decoration: underline;
  }
`;

const ModLink = styled(Link)`
  flex: 1;
  text-decoration: none;
  text-align: center;

`;
