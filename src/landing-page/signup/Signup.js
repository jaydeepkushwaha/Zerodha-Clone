import React from "react";
import Hero from "./Hero";
import Login from "./Login";
import Stock from "./Stock";
import Steps from "./Steps";
import Unbeatible from "./Unbeatible";
import Explore from "./Explore";
// import FAQ from "./FAQ";
import OpenAccount from "../OpenAccount";

function Signup() {
    return (
        <>
            <Hero />
            <Login />
            <Stock />
            <Steps />
            <Unbeatible />
            <Explore />
            {/* <FAQ /> */}
            <OpenAccount/>
        </>
    );
}
export default Signup;