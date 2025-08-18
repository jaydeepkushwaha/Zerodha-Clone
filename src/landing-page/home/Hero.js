import React from 'react';

function Hero(){
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='Accets\homeHero.png' alt='Hero Image' className='mb-5 '></img>
                <h1 className='.fs-1 text mt-5'>Invest in everything</h1>
                <p className='.fs-4 text'>Invest in stocks, mutual funds, ETFs, and more with Zerodha. Start your investment journey today!</p>
                <a href='#' className='btn btn-primary fs-5 fw-bold w-25 p-3  ' style={{margin:"0 auto"}}>Sign up for free</a>
            </div>

        </div>
    )
}
export default Hero;