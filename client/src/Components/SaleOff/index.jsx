import React from "react"
import {Link as RouterLink} from "react-router-dom"
import "./SaleOff.css"

const SaleOff = ({items}) => {
    return (
        <div className="home-surplus-sale-container">
            {items.map((item, id) => (
                <div key={id} className="outerlayer">
                    <div className="home-sale-item">
                        <RouterLink to="/Login">
                            <p>{item.product}</p>
                            <p>up to</p>
                            <div className="saleoffTag">
                                <p style={{fontSize:"5em"}}>{item.saleoff}%</p>
                            </div>
                        </RouterLink>
                    </div>
                </div>
               
            ))}
        </div>
    )
}

export default SaleOff;
