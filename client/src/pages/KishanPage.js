import React from "react";
// import TopNav from "../component/TopNav.js";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DepressedButton from "../component/DepressedButton.js";
import burn from "../assets/burns.jpg";
import AppLogo from "../assets/bacgG.png";

import "./style2.css";

function KishanPage() {
  return (
    <Div>
      {/* <TopNav /> */}

      <ContentContainer>
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <LogoName src={AppLogo} />
            <BiggerText>Generation Of Biofuel</BiggerText>
            <SmallerText>
              Agro Vastumeth is the one stop solution of all the process and the
              tool which help you to determine the amount of biogas produced
            </SmallerText>
            <ContentItem>
              <Link style={{ textDecoration: "none" }} to="/calculator">
                {" "}
                <DepressedButton>Discover</DepressedButton>
              </Link>
            </ContentItem>
          </Col>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <div className="card">
                <div className="front">
                  <img src={burn} alt="img.png" />
                </div>

                <div className="back"></div>
              </div>

              {/* <Logo src={logo} /> */}
            </div>
          </Col>
        </Row>
      </ContentContainer>
      <Copyright>copyright @2022-2023</Copyright>
    </Div>
  );
}

export default KishanPage;

const Copyright = styled.div`
  position: absolute;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  text-align: center;
  font-size: 20px;
  color: #fff;
  display: block;
  bottom: 0px;
`;

const Div = styled.div`
  min-height: 100vh;
  height: auto;
  align-items: center;
  width: 100%;
  display: flex;

  @media (max-width: 992px) {
    display: inline-block;
  }
`;

const ContentContainer = styled(Container)`
  max-width: 1280px;
  margin: 0 auto;
`;

const BiggerText = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  line-height: 92px;
  text-align: center;
  width: auto;
  // margin-top: 6rem;
  display: inline-block !important;

  @media (max-width: 991px) {
    margin-top: 10px;
  }
`;

const SmallerText = styled.h3`
  color: rgba(255, 255, 255, 0.85) !important;
  font-family: Lato, sans-serif;
  text-align: justify;
  font-size: 1.2em;
  font-style: normal;
  line-height: 30px;
  color: #170e3e;
  width: 100%;
  padding: 0 10px 0 10px;
  display: inline-block !important;
`;

const Logo = styled.img`
  margin-top: 5rem;
  width: 17rem !important;
  height: 17rem !important;
  display: flex !important;
  align-items: center;

  @media (max-width: 991px) {
    display: none !important;
  }
`;

const LogoName = styled.img`
  // margin: 10px;
  // margin-left: 20px;
  width: 180px !important;
  height: 100px !important;
  display: inline-block !important;

  @media (max-width: 990px) {
    display: none;
  }
`;

const ContentItem = styled.div`
  width: 100%;
  list-style: none;
  padding: 20px 5px;
  // @media (max-width: 832px) {
  //   // display: none;
  // }
`;
