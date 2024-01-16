import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Carousel.css";
import "../../Pages/Home/Home.css"
import SaleOff from "../SaleOff";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import {Link as RouterLink} from "react-router-dom"

const Carousel = ({ fullItems}) => {
  const itemRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxItem = 5


  const handleClickRight = () => {
    let nextIndex = Math.min(currentIndex + 1, fullItems.length - maxItem);
    const container = document.querySelector('.carousel-list');
    const viewportWidth = window.innerWidth;

    const itemWidthPixels = 0.16 * viewportWidth;  // Corrected
    const scrollToX = nextIndex * itemWidthPixels;

    container.scrollTo({
      top: 0,
      left: scrollToX,
      behavior: 'smooth',
    });
  
    setCurrentIndex(nextIndex);
  };

  const handleClickLeft = () => {
    let prevIndex = Math.max(currentIndex-1,0);
    const container = document.querySelector('.carousel-list');
    const viewportWidth = window.innerWidth;
    const itemWidthPixels = (0.16 * viewportWidth)
    const scrollToX = prevIndex * itemWidthPixels;

    container.scrollTo({
      top: 0,
      left: scrollToX,
      behavior: 'smooth',
    });

    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carousel">

        <ArrowCircleLeftOutlinedIcon
            onClick={handleClickLeft}
            fontSize="large"
            color="disabled"
            sx={{ position: "absolute", top: "50%", left: 0, cursor: currentIndex === 0 ? "not-allowed" : "pointer", color: currentIndex === 0 ? "disabled" : "purple", transform: "translateY(-50%)" }}
        />

        <div className="carousel-list">
            {fullItems.map((item, index) => {
                return (        
                    <div key={index} className="carousel-outerlayer" ref={el => (itemRefs.current[index] = el)}>
                        <div className="carousel-sale-item">
                        <RouterLink to="/Login">
                            <p>{item.product}</p>
                            <p>up to</p>
                            <div className="saleoffTag">
                            <p style={{ fontSize: "4vw" }}>{item.saleoff}%</p>
                            </div>
                        </RouterLink>
                        </div>
                    </div>
                );
            })}
        </div>

      <ArrowCircleRightOutlinedIcon
        onClick={handleClickRight}
        fontSize="large"
        color="disabled"
        sx={{ position: "absolute", top: "50%", right: 0, cursor: currentIndex === fullItems.length - maxItem ? "not-allowed" : "pointer", color: currentIndex === fullItems.length - maxItem ? "disabled" : "purple", transform: "translateY(-50%)" }}
      />

    </div>
  );

};

export default Carousel