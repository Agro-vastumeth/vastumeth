import React from "react";
import Nav from "../component/Nav";

import CropCard from "../component/CropCard.js";
import Barley from "../assets/barley.png";
import Rice from "../assets/rice.png";

const cropAsset = {
  Haryana: [
    {
      image: Barley,
      name: "Barley",
      amount: 200,
    },
    {
      image: Rice,
      name: "Rice",
      amount: 300,
    },
    {
      image: Rice,
      name: "Rice",
      amount: 300,
    },
  ],
  Punjab: [
    {
      image: Rice,
      name: "Rice",
      amount: 300,
    },
    {
      image: Rice,
      name: "Rice",
      amount: 300,
    },
    {
      image: Rice,
      name: "Rice",
      amount: 300,
    },
    {
      image: Rice,
      name: "Rice",
      amount: 300,
    },{
      image: Rice,
      name: "Rice",
      amount: 300,
    },{
      image: Rice,
      name: "Rice",
      amount: 300,
    },{
      image: Rice,
      name: "Rice",
      amount: 300,
    },{
      image: Rice,
      name: "Rice",
      amount: 300,
    },{
      image: Rice,
      name: "Rice",
      amount: 300,
    },
  ],
  "Madhya Pradesh": [
    {
      image: Rice,
      name: "Rice",
      amount: 300,
    },
    {
      image: Rice,
      name: "Rice",
      amount: 300,
    },
  ],
};

const Crops = () => {
  return (
    <div>
      <Nav />
      <CropCard data={cropAsset} />
    </div>
  );
};

export default Crops;
