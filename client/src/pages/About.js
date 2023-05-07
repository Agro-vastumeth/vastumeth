import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/material";
import SubmitButton from "../component/SubmitButton";

import styled from "styled-components";
import Nav from "../component/Nav";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "yellow",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
    // display: "inline",
  },
  "& .MuiOutlinedInput-root": {
    width: "100%",
    // display: "inline",

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

function About() {
  return (
    <div>
      <Nav />
      <CenterContent justifyContent="space-around">
        <Division width={90} height={80}>
          {" "}
          <ContentBox flex={4} padding={[30, 30]}>
            <p>
              <h3>Purpose</h3>
              <p>
                The purpose of the website is to help the farmers, service
                sector companies and agencies to know how an agricultural waste
                can be helpful for the sustainability of the environment.
              </p>
              <h3>Solution</h3>
              <p>
                The calculator would help to provide an approximate estimation
                of the biogas based on the elemental composition of agricultural
                waste, and combination of waste produced in particular state
              </p>
            </p>
          </ContentBox>
          <ContentBox flex={6} margin={2}>
            <Box
              sx={{ position: "relative" }}
              component="form"
              noValidate
              autoComplete="off"
            >
              <Box
                sx={{
                  // height: "30rem",
                  position: "relative",
                  margin: "30px",
                  marginBottom: "0px",
                  "& .MuiTextField-root": {
                    m: 3,
                    width: "35ch",
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                <CenterContent>
                  <CssTextField label="Name" id="custom-css-outlined-input" />
                  <CssTextField
                    label="Surname"
                    id="custom-css-outlined-input"
                  />
                </CenterContent>
              </Box>
              <Box
                sx={{
                  // backgroundColor: "primary.dark",
                  position: "relative",
                  margin: "30px",
                  marginTop: "0px",
                  "& .MuiTextField-root": {
                    m: 3,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                <CenterContent>
                  <CssTextField
                    label="abc@gmail.com"
                    id="custom-css-outlined-input"
                  />
                </CenterContent>
                <CenterContent>
                  <CssTextField
                    label="Contact Number"
                    id="custom-css-outlined-input"
                  />
                </CenterContent>
                <CenterContent>
                  <TextareaAutosize
                    minRows={4}
                    maxRows={7}
                    aria-label="maximum height"
                    placeholder="   enter your message here"
                    // defaultValue="."
                    maxLength="200px"
                    style={{
                      width: "100%",
                      margin: "24px",
                      background: "#ffff0000",
                      color: "#000",
                    }}
                  />
                </CenterContent>
                <CenterContent justifyContent="space-around">
                  <SubmitButton>Submit</SubmitButton>
                </CenterContent>
              </Box>
            </Box>
          </ContentBox>
        </Division>
      </CenterContent>
    </div>
  );
}

export default About;

const CenterContent = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  // flex-direction: row;
  align-items: center;
`;

const Division = styled.div`
  width: ${({ width }) => (width ? `${width}vw` : "max-content")};
  height: ${({ height }) => (height ? `${height}vh` : "max-content")};
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 80px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  // flex: ${(props) => (props.flex ? props.flex : 1)};
  margin: ${(props) => (props.margin ? props.margin + "px" : "10px")};
`;

const ContentBox = styled.div`
  padding: ${({ padding }) =>
    padding ? `${padding[0]}px ${padding[1]}px` : "0px"};
  width: ${({ width }) => (width ? `${width}%` : "max-content")};
  height: 96%;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  // display: flex;
  flex: ${({ flex }) => (flex ? flex : "1")};
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
