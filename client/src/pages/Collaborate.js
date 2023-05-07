import React from "react";
import PartnersCard from "../component/PartnersCard";
import { Container } from "react-bootstrap";
import styled from "styled-components";
/*import SpiritSwap from "../assets/spirit-logo.svg";
import RevestLogo from "../assets/revest-logo.png";*/
import Carbon from "../assets/Carbon3.png";
import Green from "../assets/Green2.jpg";
import Spectrum from "../assets/sectrum.jpg";
import Ministry from "../assets/Ministry.jpg";
import Carbon_Loops from "../assets/Carbon_loops.jpg";
import Nav from "../component/Nav";

const Partners = [
  {
    name: "Carbon Masters",
    image: Carbon,
    about:
      "Carbon Masters is a climate tech company , established first in the UK in 2009 and then in India in 2012. Through Carbonlites, our mission is to reduce carbon emissions by replacing fossil fuels consumption with innovative, clean energy, low carbon solutions & products.",
    checkoutLink: "https://www.carbonlites.com",
  },
  {
    name: "Green Elephant",
    image: Green,
    about:
      "Green Elephant is a Pune based firm producing bio-CNG as well as a technology provider. Green  Elephant  has built  in  2010  (Phase  1)  and  2015  (Phase  2)  India’s  largest biogas  upgradation  plant  utilising  up  to  600 m3/day of spent wash and producing upto 7920 kg of RNG. The RNG produced is supplied to industries. The  offered  CBG contains  a  97%  methane  content  and  fulfills  all  Indian  standards.",
    checkoutLink: "https://greenelephant.in",
  },
  {
    name: "Spectrum Renewable Energy",
    image: Spectrum,
    about:
      "Spectrum Renewable Energy Private Limited (SREL) is dedicated to the development of innovative biogas projects in rural markets that capture renewable energy from organic waste products, while increasing agricultural profitability and sustainability through environmentally responsible practices. We strongly believe that the local production of renewable energy will significantly benefit rural communities by providing access to energy for the millions currently relying on either expensive fossil fuels or traditional biomass for cooking, lighting, industrial and transportation needs.",
    checkoutLink: "http://srel.in",
  },
  {
    name: "Ministry of New and Renewable of Energy",
    image: Ministry,
    about:
      "The Ministry is promoting all the technology options available for setting up projects for recovery of energy in the form of Biogas/BioCNG/Electricity from agricultural, Industrial and urban wastes of renewable nature such as municipal solid wastes, vegetable and other market wastes, slaughterhouse waste, agricultural residues and industrial/STP wastes & effluents.",
    checkoutLink: "https://mnre.gov.in/waste-to-energy/current-status",
  },
  {
    name: "Carbon Loops",
    image: Carbon_Loops,
    about:
      "Carbon Loops that worked towards tying up with corporates and educational institutions to segregate waste and create compost that was sent to farmers in rural areas to increase soil fertility. They began by creating compost that was sent to farmers in and around Chennai. They then progressed to creating biogas to power the canteen kitchen at Loyola.  In the last two years, the company has had a turnover of ₹2 crores.",
    checkoutLink: "https://carbonloops.com/",
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
  padding: 5rem;
  flex: ${(props) => (props.flex ? props.flex : 1)};
  margin: 50px auto;
`;
