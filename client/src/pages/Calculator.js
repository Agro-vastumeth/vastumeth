import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import Nav from "../component/Nav";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
      boxShadow: "4px 4px 12px #176DAD,-4px -4px 12px #176DAD",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

function Calculator() {
  return (
    <div>
      <Nav />
      <CenterContent>
        <Calculate flex={0.5}> </Calculate>
        <Calculate flex={9}>
          <Row
            style={{
              flex: 1,
              alignItems: "center",
            }}
            lg={2}
            md={2}
          >
            <Col></Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 3, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <CssTextField label="Carbon" id="custom-css-outlined-input" />
                <CssTextField label="Nitrogen" id="custom-css-outlined-input" />
                <CssTextField label="Hydrogen" id="custom-css-outlined-input" />
                <CssTextField label="Oxygen" id="custom-css-outlined-input" />
              </Box>
            </Col>
          </Row>
        </Calculate>
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

const Calculate = styled(Container)`
  width: 80vw;
  height: 70vh;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 80px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex: ${(props) => props.flex || 5};
  margin: 50px 50px;
`;
