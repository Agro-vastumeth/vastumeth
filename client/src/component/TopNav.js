import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DepressedButton from "../component/DepressedButton";
import AppLogo from "../assets/bacgG.png";

function LandingNav() {
  return (
    <NavWrap>
      <LogoName src={AppLogo} />

      <ContentWrapper>
        <ContentList>
          <ContentItem>
            <Link style={{ textDecoration: "none" }} to="/discover">
              {" "}
              <DepressedButton>Discover</DepressedButton>
            </Link>
          </ContentItem>

          <ContentItem>
            <Link style={{ textDecoration: "none" }} to="/calculator">
              {" "}
              <DepressedButton>Discover</DepressedButton>
            </Link>
          </ContentItem>

          <ContentItem showOnMedia={true}></ContentItem>
        </ContentList>
      </ContentWrapper>
    </NavWrap>
  );
}

export default LandingNav;

const NavWrap = styled.nav`
  height: 15vh;
  display: flex;
  justify-content: space-between;

  // @media (max-width: 992px) {
  //   display: flex;
  // }
`;

const LogoName = styled.img`
  margin: 10px;
  margin-left: 20px;
  width: 180px !important;
  height: 100px !important;
  display: inline-block !important;

  @media (max-width: 990px) {
    display: none;
  }
`;

// const HorizontalLogo = styled.img`
//   padding: 5px;
//   @media (max-width: 990px) {
//     display: inline !important;
//     justify-content: center;
//     width: 115px;
//     margin-left: 20px;
//   }
// `;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ContentList = styled.ul`
  padding: 5px;
  display: flex !important;
  align-items: center;
`;

const ContentItem = styled.li`
  list-style: none;
  padding-left: 50px;
  // @media (max-width: 832px) {
  //   // display: none;
  // }
`;
