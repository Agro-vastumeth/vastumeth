import styled from "styled-components";

const ElectricButton = styled.button`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #7e97b8;
  background-color: #e0e8ef;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: rgba(255, 255, 255, 0.333);
  border-radius: 40px 40px 40px 40px;
  padding: 16px 24px 16px 28px;
  transform: translate(0px, 0px) rotate(0deg);
  transition: 0.2s;
  color: #516d91;
  background-color: #e5edf5;
  box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);

  &:hover {
    box-shadow: -4px -2px 16px 0px #ffffff,
      4px 2px 16px 0px rgb(95 157 231 / 48%);
  }
`;

export default ElectricButton;
