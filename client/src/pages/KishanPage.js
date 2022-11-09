import React from "react";
import TopNav from "../component/TopNav.js";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.png";

function KishanPage() {
  return (
    <div style={{ display: "relative" }}>
      <TopNav />

      <ContentContainer>
        <Row>
          <Col>
            <BiggerText>Generation Of Biofuel</BiggerText>
            <SmallerText>
              an estimator to predict the amount of BioGas produced from the
              elemental analysis
            </SmallerText>
          </Col>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <Logo src={logo} />
            </div>
          </Col>
        </Row>
      </ContentContainer>
    </div>
  );
}

export default KishanPage;

const ContentContainer = styled(Container)`
  max-width: 1280px;
  margin: 50px auto;
`;

const BiggerText = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  line-height: 92px;
  text-align: center;
  width: auto;
  margin-top: 6rem;
  display: inline-block !important;

  @media (max-width: 991px) {
    margin-top: 10px;
  }
`;

const SmallerText = styled.h3`
  color: rgba(50, 2, 63, 0.85) !important;
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
