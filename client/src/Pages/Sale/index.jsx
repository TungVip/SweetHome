import "./Sale.css";
import React, { useState, useEffect } from "react";
import {BigFooter, Carousel, ItemList} from "../../Components"
import { Button } from "@mui/material";
const Sale = ({salePickItems}) => {
  const [fullItems, setFullItems] = useState([
    {product: "Bedroom Furniture", saleoff: 40},
        {product: "Area Rugs", saleoff: 60},
        {product: "Living Room Seating", saleoff: 40},
        {product: "Bathroom Upgrades", saleoff: 40},
        {product: "Bathroom Upgrades", saleoff: 40},
        {product: "Bedroom Furniture", saleoff: 40},
        {product: "Area Rugs", saleoff: 60},
        {product: "Living Room Seating", saleoff: 40},
        {product: "Bathroom Upgrades", saleoff: 40},
        {product: "Bathroom Upgrades", saleoff: 40},
  ])

  const [currentPickFUIID, setCurrentPickFUID] = useState(0)

  const [currentCategory, setCurrentCategory] = useState(Object.keys(salePickItems[0])[0])

  const handleButtonClick = (index, category) => {
    setCurrentPickFUID(index)
    setCurrentCategory(category)
  }
  return (
    <div className="sale">
      <div className="sale-banner">
        <img src="./Images/sale-banner.webp" width="100%" alt="sale-banner"/>
      </div>

      <div className="sale-furniture-deal">
        <Carousel fullItems={fullItems}/>
      </div>

      <div className="sale-pick-for-you">
        <h2>Picks Just For You</h2>
        <div className="sale-category">
        {salePickItems.map((category, index) => (
          <button
            className={`sale-box ${currentPickFUIID === index ? 'currentID' : 'notCurrentID'}`}
            key={index}
            onClick={() => handleButtonClick(index, Object.keys(category)[0])}
          >
            {Object.keys(category)[0]}
            
          </button>
        ))}
        </div>

        <ItemList salePickItems={salePickItems[currentPickFUIID][currentCategory]}/>
      </div>
      <BigFooter/>
    </div>
  );
};

export default Sale;
