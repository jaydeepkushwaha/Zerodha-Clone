import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate ();

    const goToProduct=()=>{
        navigate("/Product")
    }
    return (
        <div className="container">
            <div className="text-center p-5">
                <h2 style={{ marginTop: "50px" }} >Investments</h2>
                <p className="fs-5">
                    Everything from equities and derivatives to mutual funds and fixed income
                </p>
                <p >
                    Check out our <a onClick={goToProduct} href="#">technology offerings →</a>
                </p>
                <div className="p-5">
                    <img src="Accets\investments-head 01.png" style={{ height: "45%", width: "45%" }} alt="invest head video" />

                </div>
            </div>
        </div>
    )
}
export default Hero;