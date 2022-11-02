import styled from "styled-components";

const DepressedButton = styled.button`

    color: #fff;
    display: flex;
    align-items: center;
    padding: 0.5em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #ffff0000;
    border: 2px solid #e8e8e8;
    transition: all .3s;
    box-shadow:  10px 6px 10px #1688BD,
                -6px -6px 12px #1688BD;

   
   &:hover {
    border: 1px solid white;
   }
   
   &:active {
    box-shadow: 4px 4px 12px #176DAD,
                -4px -4px 12px #176DAD;
   }`;

export default DepressedButton;
