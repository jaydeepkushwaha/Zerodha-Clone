import React from 'react';

function Pricing() {
    return (
        <div className='container'>
            <div className="row " style={{ marginBottom: "50px" }}>
                <div className="col-5 p-5" >
                    <p className="fs-4 fw-semibold">Unbeatable pricing</p>
                    <p>
                        We pioneered the concept of discount broking and price transparency
                        in India. Flat fees and no hidden charges.
                    </p>
                    <a className='mt-3 fw-semibold' style={{ textDecoration: "none" ,color: "#387ED1"}} href='#'>See pricing &rarr;</a>
                </div>
                <div
                    className="col-6"
                    style={{ display: "flex" }}
                >
                    <div className="w-25 p-3">
                        <img src="Accets/pricing0.svg" alt="pricing" />
                        <p style={{ fontSize: "10px" }}>Free account opening</p>
                    </div>
                    <div className="w-25 p-3">
                        <img src="Accets/pricing0.svg" alt="pricing" />
                        <p style={{ fontSize: "10px" }}>
                            Free equity delivery
                            <br />
                            and direct mutual funds
                        </p>
                    </div>
                    <div className="w-25 p-3">
                        <img src="Accets\intradayTrades.svg" alt="pricing" />
                        <p style={{ fontSize: "10px" }}>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;