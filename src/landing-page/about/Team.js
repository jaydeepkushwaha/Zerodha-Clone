import React from "react";

function Team() {
    return (
        <div className="container text-center">
            <h3 className="p-5">People</h3>

            <div className="row p-5">
                <div className="col-6 TeamA">
                    <img className="TeamB" src="Accets/nithinKamath.jpg" />
                    <h5>Nithin Kamath</h5>
                    <p>Founder, CEO</p>
                </div>
                <div className="col-6">
                    <p className="TeamC">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he
                        faced during his decade long stint as a trader.
                        Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p className="TeamC">
                        He is a member of the SEBI Secondary Market Advisory Committee
                         (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className="TeamC">
                        Playing basketball is his zen.
                    </p>
                    <p className="TeamC">
                        Connect on <a href="#">Homepage</a>  /  <a href="#">TradingQnA</a> / <a href="#">Twitter</a>
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Team;