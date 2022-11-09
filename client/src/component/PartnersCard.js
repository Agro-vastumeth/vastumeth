import React from "react";
import styled from "styled-components";
import ExpandableButton from "../component/ExpandableButton";

const PartnersCard = ({ data }) => {
  return (
    <Div>
      {data.map((_, idx) => (
        <CustomCard key={idx}>
          <Title>{_.name}</Title>
          <hr />
          <Body>
            <Wrapper>
              <CardImg
                variant="top"
                src={
                  _.image
                    ? _.image
                    : "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                }
              />
            </Wrapper>
            <Div>
              <Text>{_.about}</Text>

              {_.checkoutLink && (
                <Checkout
                  href={_.checkoutLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExpandableButton text={"checkout"} />
                </Checkout>
              )}
            </Div>
          </Body>
        </CustomCard>
      ))}
    </Div>
  );
};

export default PartnersCard;

const Div = styled.div``;

const Wrapper = styled.div`
  width: 200px;
  align-items: center;
  margin-bottom: 30px;
`;

const CustomCard = styled.div`
  height: auto !important;
  width: auto;
  color: black;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 30px !important;
  border-radius: 20px;
  backdrop-filter: blur(2px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-bottom: 5px rgba(40, 40, 40, 0.35) solid;
  border-right: 5px rgba(40, 40, 40, 0.35) solid;
  position: relative;

  display: block;
  padding: 30px;
  box-shadow: 0 0 20px #fff, -5px 0 10px #0ff, 5px 0 10px #0ff;
`;

const Checkout = styled.a`
  display: flex;
  justify-content: flex-end;
  padding: 10px 40px 5px 40px;
`;

const CardImg = styled.img`
  width: 170px;
  margin-top: -50px;
  margin-right: 30px;
  border-radius: 10px 10px 0 0 !important;

  @media (max-width: 765px) {
    margin-top: 0px;
  } ;
`;

const Title = styled.h1`
  text-transform: uppercase;
  padding: 10px 20px;
  font-size: 30px;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.p`
  color: rgba(50, 2, 63, 1) !important;
  font-size: 18px;
  font-weight: bold;
  font-family: "Roboto", sans-serif !important;
  text-align: justify;
`;
