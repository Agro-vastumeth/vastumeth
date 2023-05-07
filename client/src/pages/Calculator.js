import { React, useReducer, useContext, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TmpCalculator from "../component/TmpCalculator";

import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import Nav from "../component/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ElectricButton from "../component/ElectricButton";
import { analysisContext } from "../Context";

import {
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    // color: "#FFFBC1",
    color: "yellow",
    fontWeight: 800,
    fontSize: 16,
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
  const [Anapros, setAnapros] = useContext(analysisContext);
  const [TmpCalculate, setTmpCalculate] = useState(0.0);

  const [experimental, setExperimental] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      experimental_L_par_Kg: 0,
      tmp_L_per_Kg: 0,
      predicted: 0,
      process: "",
    }
  );

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      carbon: "",
      nitrogen: "",
      hydrogen: "",
      oxygen: "",
      ash: "",
      state: "",
      crop: "",
      totalWaste: " ",
    }
  );

  // console.log(labels);
  const graphData = {
    labels: [
      "Experimental",
      "Experimental TMP.",
      "Predicted",
      "Predicted TMP.",
    ],

    datasets: [
      {
        label: "Experimental vs Predicted (L/Kg)",
        backgroundColor: "#fff",
        data: [
          experimental.experimental_L_par_Kg,
          experimental.tmp_L_per_Kg,
          experimental.predicted,
          TmpCalculate,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 205, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(201, 203, 207, 0.4)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  // });

  let fullInput =
    formInput.carbon &&
    formInput.nitrogen &&
    formInput.hydrogen &&
    formInput.oxygen &&
    formInput.ash &&
    formInput.state &&
    formInput.crop &&
    formInput.totalWaste;
  console.log(fullInput);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setFormInput({ [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = formInput;
    // console.log(formInput);

    await fetch("/calculate/predict", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((Response) => Response.json())
      .then((response) => {
        setExperimental({
          experimental_L_par_Kg: response.experimental_L_par_Kg,
          tmp_L_per_Kg: response.tmp_L_per_Kg,
          process: response.process,
          predicted: response.predicted,
        });
        setAnapros(response.process);
      })
      .catch((err) => console.log("error:", err));

    setTmpCalculate(TmpCalculator(formInput));
  };

  return (
    <div>
      <Nav />
      <CenterContent>
        <Division flex={0.75} height={70}>
          {" "}
          <a
            href="https://twitter.com/NFTGarage__?s=20&t=P4W8R2_Rme8mtCRrsv_mLQ"
            target="_blank"
            rel="noreferrer"
          >
            <IconBox radius={30} padding={[10, 10]}>
              <FontAwesomeIcon icon={faDiscord} color={"#fff"} size="lg" />
            </IconBox>
          </a>
          <a
            href="https://twitter.com/NFTGarage__?s=20&t=P4W8R2_Rme8mtCRrsv_mLQ"
            target="_blank"
            rel="noreferrer"
          >
            <IconBox radius={30} padding={[10, 10]}>
              <FontAwesomeIcon icon={faTwitter} color={"#fff"} size="lg" />
            </IconBox>
          </a>
          <a
            href="https://twitter.com/NFTGarage__?s=20&t=P4W8R2_Rme8mtCRrsv_mLQ"
            target="_blank"
            rel="noreferrer"
          >
            <IconBox radius={30} padding={[10, 10]}>
              <FontAwesomeIcon icon={faInstagram} color={"#fff"} size="lg" />
            </IconBox>
          </a>
        </Division>
        <Division flex={9}>
          <Row
            style={{
              // flex: 1,
              // justifyContent: "space-between",
              // alignItems: "center",
              margin: "10px 0",
            }}
            lg={2}
            md={2}
          >
            <Col className="d-flex justify-content-center">
              <ContentBox width={[100, "%"]} padding={[10, 30]}>
                <Bar
                  style={{
                    background: "#fff",
                    borderRadius: "20px",
                  }}
                  data={graphData}
                  width="20rem"
                  height="15rem"
                  options={{
                    // maintainAspectRatio: false,
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 50,
                    },
                    legend: {
                      display: true,
                      position: "left",
                    },
                  }}
                />

                <ContentBox width={[100, "%"]} padding={[10, 20]}>
                  <Solution>
                    <Wrapper>
                      <CenterLiner font={true}>
                        {Number(experimental.predicted).toFixed(3)}
                      </CenterLiner>
                      <CenterLiner>Predicted(L/Kg)</CenterLiner>
                    </Wrapper>
                  </Solution>
                  <Solution>
                    <CenterLiner>{TmpCalculate}</CenterLiner>
                    <CenterLiner>TMP(L/Kg)</CenterLiner>
                  </Solution>
                </ContentBox>
              </ContentBox>
            </Col>
            <Col className="d-flex justify-content-center">
              <form onSubmit={handleSubmit} style={{ width: "88%" }}>
                <ContentBox height={60} margin={2}>
                  <Box
                    // component="form"
                    style={{
                      margin: "0px auto",
                      padding: "10px",
                    }}
                    sx={{
                      height: "fit-content",
                      "& .MuiTextField-root": {
                        m: 2,
                        width: "50ch",
                        display: "flex",
                        alignItems: "center",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                    // onSubmit={handleSubmit}
                  >
                    <CssTextField
                      label="Carbon (percent)"
                      name="carbon"
                      id="custom-css-outlined-input"
                      onChange={handleInput}
                    />
                    <CssTextField
                      label="Nitrogen (percent)"
                      name="nitrogen"
                      id="custom-css-outlined-input"
                      onChange={handleInput}
                    />
                    <CssTextField
                      label="Hydrogen (percent)"
                      name="hydrogen"
                      id="custom-css-outlined-input"
                      onChange={handleInput}
                    />
                    <CssTextField
                      label="Oxygen (percent)"
                      name="oxygen"
                      id="custom-css-outlined-input"
                      onChange={handleInput}
                    />
                    <CssTextField
                      label="Ash (percent)"
                      name="ash"
                      id="custom-css-outlined-input"
                      onChange={handleInput}
                    />
                    <CssTextField
                      label="State (in Capital)"
                      name="state"
                      id="custom-css-outlined-input"
                      onChange={handleInput}
                    />
                    <CssTextField
                      label="Crop (in Capital)"
                      name="crop"
                      id="custom-css-outlined-input"
                      onChange={handleInput}
                    />
                    <CssTextField
                      label="Total Waste(Kg)"
                      name="totalWaste"
                      id="custom-css-outlined-input"
                      onChange={handleInput}
                    />
                  </Box>
                </ContentBox>
                <ContentBox padding={[10, 20]}>
                  <ElectricButton type="submit" disabled={!fullInput}>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>{" "}
                    BIOGAS
                  </ElectricButton>
                </ContentBox>
              </form>
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

// width: ${(props) => (props.width ? props.width + "vw" : "max-content")};
const Division = styled.div`
  display: flex;
  height: ${(props) => (props.height ? props.height + "vh" : "max-content")};
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 80px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: ${(props) => (props.flex ? props.flex : 1)};
  margin: ${(props) => (props.margin ? props.margin + "px" : "50px")};
  margin-top: 30px;
`;

const ContentBox = styled.div`
  padding: ${({ padding }) =>
    padding ? `${padding[0]}px ${padding[1]}px` : "0px"};
  width: ${({ width }) => (width ? `${width[0]}${width[1]}` : "35em")};
  height: max-content;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: inline-flex;
  flex-direction: column;
  justitfy-content: row;
  align-items: center;
  margin: 10px;
`;

const Solution = styled.div`
  width: 80%;
  // height: 100%;
  box-shadow: 0px 3px 15px rgba(254, 255, 239, 0.3);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 50px;
  border: 1px solid rgb(254, 255, 239);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 27px;
  color: #fff;
  flex: 1;
  padding: 18px 0;
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

const Wrapper = styled.div`
  display: inline-flex;
  // flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const CenterLiner = styled.div`
  margin: 0 auto;
`;
