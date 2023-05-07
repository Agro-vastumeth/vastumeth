import React from "react";
import Nav from "../component/Nav";

import CropCard from "../component/CropCard.js";
import Barley from "../assets/barley.png";
import Rice from "../assets/rice.png";
import Wheat from "../assets/wheat.png";
import Sugarcane from "../assets/sugarcane.svg";

const cropAsset = {
  UttarPradesh: [
    {
      image: Rice,
      name: "Rice",
      amount: 293,
    },
    {
      image: Wheat,
      name: "Wheat",
      amount: 357,
    },
    {
      image: Sugarcane,
      name: "sugarcane",
      amount: 266,
    },
  ],
  Haryana: [
    {
      image: Rice,
      name: "Rice",
      amount: 395,
    },
    {
      image: Wheat,
      name: "Wheat",
      amount: 392,
    },
    {
      image: Sugarcane,
      name: "sugarcane",
      amount: 421,
    },
  ],
  Punjab: [
    {
      image: Rice,
      name: "Rice",
      amount: 459,
    },
    {
      image: Wheat,
      name: "Wheat",
      amount: 427,
    },
    {
      image: Sugarcane,
      name: "sugarcane",
      amount: 484,
    },
  ]
}
const Crops = () => {
  return (
    <div>
      <Nav />
      <CropCard data={cropAsset} />
    </div>
  );
};

export default Crops;
