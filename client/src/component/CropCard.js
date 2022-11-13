import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const CropCard = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      {Object.keys(data).map((key) => (
        <div>
          {" "}
          <Container>
            <h1
              style={{
                textAlign: "center",
                margin: "2rem",
                textDecoration: "underline",
                color: "#fff",
              }}
            >
              {key}
            </h1>
            <Row xs={1} md={2} l={2} xl={3}>
              {data[key].map((_, idx) => (
                <Col
                  className="d-flex justify-content-center"
                  xl={4}
                  xxl={3}
                  key={idx}
                >
                  <PixieCard>
                    <h3>{_.name}</h3>
                    <CardImg src={_.image} sizes="30px" alt="crops.png" />
                    <PixieCardz>
                      <ModH5>{_.amount}</ModH5>
                      <h5>Kg</h5>
                    </PixieCardz>
                  </PixieCard>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default CropCard;

const PixieCard = styled.div`
  margin-bottom: 3rem;
  width: 15rem;
  height: 21rem;
  background: rgba(171, 237, 216, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 0 20px #fff, -5px 0 10px #0ff, 5px 0 10px #0ff;
`;

const PixieCardz = styled.div`
  width: 14rem;
  height: 16rem;
  background: rgba(171, 237, 216, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
`;

const CardImg = styled.img`
  width: 13rem;
  height: 14rem;
  padding-bottom: 15px;
  border-radius: 0.5rem !important;
  // border: 1px solid #170e3e;

  @media (max-width: 765px) {
    margin-top: 0px;
  } ;
`;

const ModH5 = styled.h4`
  flex: 1;
  text-align: center;
`;
