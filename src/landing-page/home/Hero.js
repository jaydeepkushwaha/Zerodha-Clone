import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero(){
    const navugate = useNavigate();

    const goToSignup = ()=>{
       navugate("/Signup");
    }
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='Accets\homeHero.png' alt='Hero Image' className='mb-5 ' style={{width:"100%"}} ></img>
                <h1 className='.fs-1 text mt-5' style={{color:"#424242"}}>Invest in everything</h1>
                <p  style={{color:"#424242", fontSize:"20px"}}>Invest in stocks, mutual funds, ETFs, and more with Zerodha. Start your investment journey today!</p>
                <a href='#' className='btn btn-primary fs-5 fw-bold w-25 p-3  ' onClick={goToSignup} style={{margin:"0 auto"}}>Sign up for free</a>
            </div>

        </div>
    )
}
export default Hero;