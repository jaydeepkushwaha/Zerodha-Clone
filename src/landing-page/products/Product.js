import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Univers from "./Univers";

function Product() {
    return (
        <>
            <Hero />
            <LeftImage
                imageUrl="Accets/kite.png"
                productName="Kite"
                priductDiscription="Our ultra-fast
                 flagship trading platform with streaming market data, advanced charts, an elegant UI, 
                and more. Enjoy the Kite  experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnDemo=""
                appStore=""
                playStore=""
            />
            <RightImage
                imageUrl="Accets/console.png"
                productName="Console"
                priductDiscription="The central dashboard
                 for your Zerodha account. Gain insights 
                into your trades and investments with 
                in-depth reports and visualisations."
                tryDemo=""
            />
            <LeftImage
                imageUrl="Accets/coin.png"
                productName="Coin"
                priductDiscription="Our ultra-fast
                 Buy direct mutual funds online, commission-free, delivered directly 
                 to your Demat account. Enjoy the investment
                  experience on your Android and iOS devices."
                tryDemo=""
                learnDemo=""
                appStore=""
                playStore=""
            />
            <RightImage
                imageUrl="Accets/kiteconnect.png"
                productName="Kite Connect API"
                priductDiscription="Build powerful trading platforms 
                and experiences with our super simple HTTP/JSON APIs.
                 If you are a startup, build your investment
                  app and showcase it to our clientbase."
                tryDemo=""
            />
            <LeftImage
                imageUrl="Accets/varsity.png"
                productName="Varsity mobile"
                priductDiscription="An easy to grasp, collection of stock market
                 lessons with in-depth coverage and illustrations. 
                Content is broken down into bite-size cards to
                 help you learn on the go."
                tryDemo=""
                learnDemo=""
                appStore=""
                playStore=""
            />
            <Univers />
        </>
    )
}

export default Product;
