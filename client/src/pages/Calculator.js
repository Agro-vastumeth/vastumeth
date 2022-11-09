import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import Nav from "../component/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ElectricButton from "../component/ElectricButton";

import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "yellow",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    width: "100%",

    "& fieldset": {
      borderColor: "grey",
    },
    "&:hover fieldset": {
      borderColor: "white",
      boxShadow: "4px 4px 12px #176DAD,-4px -4px 12px #176DAD",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

function Calculator() {
  return (
    <div style={{ position: "relative" }}>
      <Nav />
      <CenterContent>
        <Division flex={0.5} height={70}>
          {" "}
          <a
            href="https://twitter.com/NFTGarage__?s=20&t=P4W8R2_Rme8mtCRrsv_mLQ"
            target="_blank"
            rel="noreferrer"
          >
            <IconBox radius={30} padding={[10, 10]}>
              <FontAwesomeIcon icon={faDiscord} color={"#fff"} size={45} />
            </IconBox>
          </a>
          <a
            href="https://twitter.com/NFTGarage__?s=20&t=P4W8R2_Rme8mtCRrsv_mLQ"
            target="_blank"
            rel="noreferrer"
          >
            <IconBox radius={30} padding={[10, 10]}>
              <FontAwesomeIcon icon={faTwitter} color={"#fff"} size={45} />
            </IconBox>
          </a>
          <a
            href="https://twitter.com/NFTGarage__?s=20&t=P4W8R2_Rme8mtCRrsv_mLQ"
            target="_blank"
            rel="noreferrer"
          >
            <IconBox radius={30} padding={[10, 10]}>
              <FontAwesomeIcon icon={faInstagram} color={"#fff"} size={5} />
            </IconBox>
          </a>
        </Division>
        <Division flex={9} height={70}>
          <Row
            style={{
              flex: 1,
              alignItems: "center",
            }}
            lg={2}
            md={2}
          >
            <Col>
              <ContentBox padding={[10, 30]}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ultrices iaculis ipsum, sed malesuada ante interdum
                  quis. Aenean vitae pellentesque leo. Phasellus condimentum
                  urna malesuada augue vulputate, vitae lobortis augue
                  vestibulum. Curabitur eget purus non augue interdum malesuada.
                  Proin sagittis sapien eu leo dignissim, id condimentum libero
                  dictum. Nam sollicitudin sem a tortor eleifend, nec molestie
                  sem condimentum. Donec eget sagittis nunc. Nam et iaculis
                  justo, eu congue nulla. Ut porta turpis in erat vehicula
                  posuere. Fusce mi ex, varius eget sagittis a, tincidunt quis
                  ante. Etiam tincidunt, nisi ut viverra eleifend, nisi elit
                  accumsan massa, nec gravida enim odio quis felis. Nulla ut
                  elementum neque, et finibus metus. Sed eleifend enim a risus
                  euismod, et ullamcorper tellus accumsan. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus.
                </p>
              </ContentBox>
              <ContentBox padding={[10, 20]}>
                <Solution />
                <ElectricButton>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>{" "}
                  BIOGAS
                </ElectricButton>
              </ContentBox>
            </Col>
            <Col
              style={{
                height: "max-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ContentBox height={60} margin={2}>
                <Box
                  component="form"
                  sx={{
                    height: "30rem",

                    "& .MuiTextField-root": {
                      m: 5,
                      width: "50ch",
                      display: "flex",
                      alignItems: "center",
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <CssTextField label="Carbon" id="custom-css-outlined-input" />
                  <CssTextField
                    label="Nitrogen"
                    id="custom-css-outlined-input"
                  />
                  <CssTextField
                    label="Hydrogen"
                    id="custom-css-outlined-input"
                  />
                  <CssTextField label="Oxygen" id="custom-css-outlined-input" />
                </Box>
              </ContentBox>
            </Col>
          </Row>
        </Division>
      </CenterContent>
    </div>
  );
}

export default Calculator;

const CenterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

const Division = styled(Container)`
  width: ${(props) => (props.width ? props.width + "vw" : "max-content")};
  height: ${(props) => (props.height ? props.height + "vh" : "max-content")};
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 80px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: ${(props) => (props.flex ? props.flex : 1)};
  margin: ${(props) => (props.margin ? props.margin + "px" : "50px")};
`;

const ContentBox = styled.div`
  padding: ${({ padding }) =>
    padding ? `${padding[0]}px ${padding[1]}px` : "0px"};
  width: 35em;
  height: max-content;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Solution = styled.div`
  width: 70%;
  height: 5rem;
  box-shadow: 0px 3px 15px rgba(254, 255, 239, 0.3);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 50px;
  border: 1px solid rgb(254, 255, 239);
  display: flex;
  flex: 1;
  margin: 10px;
`;

const IconBox = styled.div`
  padding: ${({ padding }) =>
    padding ? `${padding[0]}px ${padding[1]}px` : "0px"};
  width: 3em;
  max-width: 3em;
  height: 3em;
  max-hiehgt: 3em;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: ${({ radius }) => (radius ? `${radius}px` : "10px")};
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  transition: all 0.3s;

  &:hover {
    box-shadow: -2px -1px 8px 0px #ffff0000,
      2px 1px 8px 0px rgb(95 157 231 / 48%);
  }
`;
