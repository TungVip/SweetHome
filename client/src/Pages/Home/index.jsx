import "./Home.css";
import React, { useState, useEffect } from "react";
import {Link as RouterLink} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from "@mui/material";
import { SaleOff, BigFooter} from "../../Components";

const Home = () => {
    const [items, setItems] = useState([
        {product: "Bedroom Furniture", saleoff: 40},
        {product: "Area Rugs", saleoff: 60},
        {product: "Living Room Seating", saleoff: 40},
        {product: "Bathroom Upgrades", saleoff: 40},
    ])

    const [displaySaleState, setDisplaySaleState] = useState(true)

  return (
    <div className="home">
      <div className="home-on-sale">
        <div className="home-sale-upperItem">
            <div className="home-upperItem-leftContent">
                <div className="home-saleoff image-item">
                    <img src="./Images/saleoff.png" alt="saleoff"/>
                </div>
            </div>

            <div className="home-upperItem-rightContent">
                <div className="home-saleItem image-item" style={{marginBottom: "20px"}}>
                    <img src="./Images/door.webp" alt="Door" /> 
                </div>
                <div className="home-saleItem image-item">
                    <img src="./Images/washer.webp" alt="Washer"/>             
                </div>              
            </div>
        </div>

        <div className="home-sale-lowerItem">
            <div className="home-lowerItem image-item">
                <img src="./Images/faux-plane.webp" alt="FauxPlant"/>    
            </div>

            <div className="home-lowerItem image-item">
                <img src="./Images/bar-stool.webp" alt="BarStool"/>    
            </div>

            <div className="home-lowerItem image-item">
                <img src="./Images/grill.webp" alt="Grill"/>    
            </div>
        </div>
      </div>

      <div className="home-deal-day">
        <RouterLink to="/Login">
            <img src="./Images/deals_of_the_day.webp" alt="DOTD"/>
        </RouterLink>
      </div>

      <div className="home-surplus-sale">
        <p className="home-title">The Surplus Sale. We overstocked - you save big.</p>
        <SaleOff items={items}/>
      </div>

      <div className="home-popup-sale" style={{display: displaySaleState ? 'flex' : 'none'}}>
        <p>Want 10% Off?</p>
        <CloseIcon onClick={() => (setDisplaySaleState(false))} sx={{color: "white", cursor:"pointer"}}/>
      </div>
      <Divider sx={{ width: "100vw", marginLeft: "-10vw" }}/>
      <BigFooter/>


    </div>
  );
};

export default Home;
