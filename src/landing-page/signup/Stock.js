import React from "react";

function Stocks() {
    return (
        
        <div className="container text-center p-5">
            <h4 className="mb-5 " style={{ paddingTop: "100px", color: "#424242" }}>
                Investment options with Zerodha demat account</h4>
            <div className="row p-4 p-lg-5 ">
                <div className="col-6 ">
                    <div className="d-flex   ">
                        <div className="m-5"><img src="Accets/StockA.svg" /></div>
                        <div style={{ marginTop: "50px", textAlign: "left" }}>
                            <h3>Stocks</h3>
                            <p >Invest in all exchange-listed <br /> securities</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="m-5"><img src="Accets/StockC.svg" /></div>
                        <div style={{ marginTop: "50px", textAlign: "left" }}>
                            <h3>StoIPO</h3>
                            <p >Apply to the latest IPOs instantly <br /> via UPI</p>
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <div className="d-flex ">
                        <div className="m-5"><img src="Accets/StockB.svg" /></div>
                        <div style={{ marginTop: "50px", textAlign: "left" }}>
                            <h3>Mutual funds</h3>
                            <p>Invest in commission-free direct<br /> mutual funds</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="m-5"><img src="Accets/StockD.svg" /></div>
                        <div style={{ marginTop: "50px", textAlign: "left" }}>
                            <h3 >Futures & options</h3>
                            <p >Hedge and mitigate market risk<br /> through simplified F&O trading</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a className='btn btn-primary p-2 fs-5 fw-senibold w-25  '> Explore investments</a>
            </div>

        </div>
    )

}
export default Stocks;