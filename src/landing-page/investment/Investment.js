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
                productName="Direct mutual funds"
                productDiscription="Invest in over 2000 direct mutual funds directly
                 without a distributor. Save up to 1.5% in commissions every year."
                Available="Available on"
                linkkite="Coin"
                
            />
            <LeftImage
                imageUrl="Accets\investments-fo04.png"
                productName="Futures & Options"
                productDiscription="Trade metals, oil, and agri commodities on MCX and stock
                 and index futures and options on NSE."
                Available="Available on"
                linkkite="Kite"
                linkConsole="Margin calculator"
                Stockreport="Sensibull"
                streak="Streak"

            />
            <RightImage
                imageUrl="Accets\ipo-products05.png"
                productName="IPO"
                productDiscription="Now apply online and invest in companies listing on the Indian
                 exchanges with an IPO (Initial Public Offering) with your BHIM UPI app. Read more"
                Available="Available on"
                linkkite="Kite"
                Stockreport="Upcoming IPOs"
            />
            <LeftImage
                imageUrl="Accets\gift-illustration06.png"
                productName="Gift stocks"
                productDiscription="Introduce your friends and family to the habit of investing
                 for the long term by gifting
                 them stocks, ETFs, mutual funds and gold bonds. A gift that keeps on giving."
                Available="Available on"
                linkkite="Send a gift"

            />
            <RightImage
                imageUrl="Accets\investments-income07.png"
                productName="Fixed income"
                productDiscription="Invest in bonds with yields better than bank FDs guaranteed by the Government of India."
                Available="Available on"
                linkkite="Kite"
                smallCase="Margin calculator"
                Stockreport="Sensibull"
                streak="Streak"
            />
            <OpenAccount />
        </>
    )
}
export default Investment;