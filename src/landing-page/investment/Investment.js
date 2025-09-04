import React from "react";
import LeftImage from "./LeftImage";
import Hero from "./Hero";
import RightImage from "./RightImage";
import OpenAccount from "../OpenAccount"

function Investment() {
    return (
        <>
            <Hero />
            <LeftImage
                imageUrl="Accets\investments-stocks  02.png"
                productName="Stocks"
                productDiscription="Trade stocks for delivery or intraday on over 5000
                 stocks listed  on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)."
                Available="Available on"
               linkkite="Kite"
               linkConsole="Console"
               smallCase="SmallCase"
               Stockreport="StockReports+"
               streak="Streak"
               Market="Market"
                
            />
            <RightImage
            imageUrl="Accets\investments-mf 03.png"
                productName="Stocks"
                productDiscription="Trade stocks for delivery or intraday on over 5000
                 stocks listed  on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)."
                Available="Available on"
               linkkite="Kite"
               smallCase="Margin calculator"
               Stockreport="Sensibull"
               streak="Streak"
             />
             <LeftImage
                imageUrl="Accets\investments-fo04.png"
                productName="Stocks"
                productDiscription="Trade stocks for delivery or intraday on over 5000
                 stocks listed  on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)."
                Available="Available on"
               linkkite="Kite"
               smallCase="Margin calculator"
               Stockreport="Sensibull"
               streak="Streak"
                
            />
            <RightImage
            imageUrl="Accets\ipo-products05.png"
                productName="Stocks"
                productDiscription="Trade stocks for delivery or intraday on over 5000
                 stocks listed  on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)."
                Available="Available on"
               linkkite="Kite"
               smallCase="Margin calculator"
               Stockreport="Sensibull"
               streak="Streak"
                />
             <LeftImage
                imageUrl="Accets\gift-illustration06.png"
                productName="Stocks"
                productDiscription="Trade stocks for delivery or intraday on over 5000
                 stocks listed  on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)."
                Available="Available on"
               linkkite="Kite"
               linkConsole="Console"
               smallCase="SmallCase"
               Stockreport="StockReports+"
               streak="Streak"
               Market="Market"
                
            />
            <RightImage
            imageUrl="Accets\investments-income07.png"
                productName="Stocks"
                productDiscription="Trade stocks for delivery or intraday on over 5000
                 stocks listed  on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)."
                Available="Available on"
               linkkite="Kite"
               smallCase="Margin calculator"
               Stockreport="Sensibull"
               streak="Streak" 
            />
            <OpenAccount/>
        </>
    )
}
export default Investment;