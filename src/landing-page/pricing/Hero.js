import React from "react";

function Hero() {
    return (
        <div className="container p-5">
            <div className="text-center p-5">
                <h3 className="pt-3">Charges</h3>
                <p className="p-2 fs-5">List of all charges and taxes</p>
            </div>
            <div className="cardMain" >

                <div class="card-group" style={{width:"100%"}}>
                    <div className="card text-center cardA">
                        <div className="cardB"><img src="Accets\pricing0.svg" className="card-img-top" alt="..." /></div>
                        <div className="card-body">
                            <h3 className="card-title cardH">Free equity delivery</h3>
                            <p className="card-text">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                        </div>
                    </div>
                    <div className="card text-center cardA">
                        <div className="cardB"><img src="Accets\intradayTrades.svg" className="card-img-top" alt="..." /></div>
                        <div className="card-body">
                            <h3 className="card-title cardH">Intraday and F&O trades</h3>
                            <p className="card-text">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                        </div>
                    </div>
                    <div className="card text-center cardA">
                        <div className="cardB"><img src="Accets\pricingEquity.svg" className="card-img-top" alt="..." /></div>
                        <div className="card-body">
                            <h3 className="card-title cardH">Free direct MF</h3>
                            <p className="card-text">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Hero;