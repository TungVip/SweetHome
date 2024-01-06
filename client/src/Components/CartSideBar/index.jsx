import "./CartSideBar.css";
import React, { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { Divider, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import SellIcon from '@mui/icons-material/Sell';


const CartSideBar = ({onClose}) => {
    return (
      <div className='form_modal'>
        <Modal
        open={true}
        onClose={onClose}
      >
        <div className="cartSideBar-content">
        <div className="cartSideBar-modal open">
            <div className="cartSideBar-name">
              <p>In Your Cart</p>
              <CloseIcon sx={{ml: "auto", color: "black", cursor: "pointer", mr: "10px"}} onClick={onClose} />
            </div>
            <Divider/>

            <div className="cartSideBar-listMyOrder">
              <div>
                <p>Oh-no! Looks like your cart is empty.</p>
                <p>Here are some options to get you started:</p>
                
              </div>
              <div className="cartSideBar-item">
                <LoginIcon sx={{mr: "10px", fontSize: "40px"}} />
                <span><RouterLink style={{fontSize: "1em", color: "#934398", textDecoration: "underline", cursor: 'pointer'}} to="/Login" >Sign In</RouterLink> to view your saved items</span>
              </div>
              <div className="cartSideBar-item">
                <SellIcon sx={{mr: "10px", fontSize: "40px"}}/>
                <span>Start saving with <RouterLink to="/Sale" style={{fontSize: "1em", color: "#934398", textDecoration: "underline", cursor: 'pointer'}}>Daily Sales</RouterLink></span>
              </div>
              
              
            </div>

            
        </div>
        
        </div>
        
      </Modal>
    </div>
    );

};

export default CartSideBar;

