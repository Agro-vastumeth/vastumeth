import React from "react";
import PartnersCard from "../component/PartnersCard";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import SpiritSwap from "../assets/spirit-logo.svg";
import RevestLogo from "../assets/revest-logo.png";
import Nav from "../component/Nav";

const Partners = [
  {
    name: "SpiritSwap",
    image: SpiritSwap,
    about:
      "Spiritswap is a decentralized exchange (DEX) on the Fantom Opera Network. Traders can easily swap between tokens within our application and get guaranteed rates for the swaps. Each swap on SpiritSwap incurs a fee, which gets distributed between liquidity providers and is used to buy back SPIRIT tokens at market rate, which is then distributed to inSPIRIT holders. While offering lightning fast swaps at an affordable rate, SpiritSwap is moving toward becoming a full DeFi suite, offering users different strategies to manage their cryptocurrency assets. SpiritSwap’s key features include Zap, inSPIRIT, boosted farms, lending, borrowing, leverage trading, and a cross chain bridge. Our team is focused on building out a protocol to become more than just a DEX, but rather a HUB of all things DeFi on Fantom.",
    checkoutLink: "https://www.spiritswap.finance/",
  },
  {
    name: "Revest Finance",
    image: RevestLogo,
    about:
      "The Revest Protocol offers a revolutionary new use of NFTs as financial tools through the Financial Non-Fungible Token (FNFT). Individual and enterprise-level users can deposit any ERC-20 or ERC-721 into Revest’s interactive FNFTs and set custom unlocking conditions (time, value, or contract-based). Revest allows the tokenization of all non-fungible financial positions with non-fungible tokens. This simple turn-key solution offers elegant applications ranging from token vesting to cutting-edge implications for derivative and borrowing/lending platforms.",
    checkoutLink: "https://revest.finance/",
  },
];

export default function Collaborate() {
  return (
    <div>
      <Nav />
      <Division width={90}>
        <PartnersCard data={Partners} />
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
  //   flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 3rem;
  flex: ${(props) => (props.flex ? props.flex : 1)};
  margin: 50px auto;
`;
