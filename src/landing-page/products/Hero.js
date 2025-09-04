import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate ();

    const goToInvest = ()=>{
        navigate("/Investment")
    }
    return (
        <div className="container">
            <div className="text-center ProductA">
                <h3>Zerodha Products</h3>
                <p >Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href="#" onClick={goToInvest} >investment offerings &rarr;</a> </p>
            </div>

        </div>
    )
}
export default Hero;