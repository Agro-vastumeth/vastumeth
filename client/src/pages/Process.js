import React, { useEffect, useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "../component/Nav";
import styled from "styled-components";
import { analysisContext } from "../Context";

export default function Process() {
  const [AllProcess, setAllProcess] = useState([]);

  const [Anapros, setAnapros] = useContext(analysisContext);

  useEffect(() => {
    fetch("/calculate/find/process")
      .then((Response) => Response.json())
      .then((response) => {
        setAllProcess(response);
      });
  }, [Anapros]);

  return (
    <div>
      <Nav />

      <Division width={90}>
        {Anapros === "" ? (
          AllProcess.map((pros, id) => (
            <SinglePros>
              <h3>Process: {id + 1}</h3>
              <hr />
              <p>{pros.process}</p>
            </SinglePros>
          ))
        ) : (
          <SinglePros>
            <h3>Process</h3>
            <hr />
            {Anapros}
          </SinglePros>
        )}
      </Division>
    </div>
  );
}

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
  padding: 5rem;
  // flex: ${(props) => (props.flex ? props.flex : 1)};
  margin: 50px auto;
`;

const SinglePros = styled.div`
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  color: #fff;

  background: rgba(87, 223, 175, 0.2);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  box-shadow: 0 0 20px rgba(119, 122, 171, 0.5),
    -5px 0 10px rgba(31, 38, 135, 0.37), 5px 0 10px rgba(31, 38, 135, 0.37);
  font-size: 18px;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
