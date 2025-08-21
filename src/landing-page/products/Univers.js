import React from "react";

function Univers() {
    return (
        <div className="container">
            <div className="text-center p-5">
                <h5>Want to know more about our technology stack? Check out the <a href="#">Zerodha.tech</a> blog.</h5>
            </div>
            <div className="text-center p-3">
                <h4>The Zerodha Universe</h4>
            </div>
            <h6 className="text-center pb-5">Extend your trading and investment experience even further with our partner platforms</h6>
            <div className="d-flex justify-content-around p-3 ">
                <a href="#">
                    <div className="card universA " style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img src="Accets/zerodhaFundhouse.png" className="card-img-top universimageA" alt="..." />
                        </div>
                        <div className="card-body">
                            <p style={{ fontSize: "12px", marginTop: "10px" }} className="card-text text-center">Our asset management venture <br />
                                that is creating simple and transparent index <br />
                                funds to help you save for your goals.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="card universA" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img src="Accets/sensibullLogo.svg" className="card-img-top universimageB" alt="..." />
                        </div>
                        <div className="card-body">
                            <p style={{ fontSize: "12px", marginTop: "10px" }} className="card-text text-center">Options trading platform that lets you<br />
                                create strategies, analyze positions, and examine
                                data points like open interest, FII/DII, and more.

                            </p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="card universA " style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img src="Accets\tijori.svg" className="card-img-top universimageC p-1 " alt="..." />
                        </div>
                        <div className="card-body">
                            <p style={{ fontSize: "12px", marginTop: "10px" }} className="card-text text-center">Investment research platform <br />
                                that offers detailed insights on stocks, <br />
                                sectors, supply chains, and more.

                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="d-flex justify-content-around p-3 ">
                <a href="#">
                    <div className="card universA" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img src="Accets\streak-logo.png" className="card-img-top universimageD" alt="..." />
                        </div>
                        <div className="card-body">
                            <p style={{ fontSize: "12px", marginTop: "10px" }} className="card-text text-center">Systematic trading platform <br />
                                that allows you to create and backtest <br />
                                strategies without coding.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="card universA" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img src="Accets\smallcaseLogo.png" className="card-img-top universimageE" alt="..." />
                        </div>
                        <div className="card-body">
                            <p style={{ fontSize: "12px", marginTop: "10px" }} className="card-text text-center">Thematic investing platform <br />
                                that helps you invest in diversified <br />
                                baskets of stocks on ETFs.
                            </p>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="card universA" style={{ width: "18rem" }}>
                        <div className="text-center">
                            <img src="Accets\ditto-logo.png" className="card-img-top universimageF " alt="..." />
                        </div>
                        <div className="card-body">
                            <p style={{ fontSize: "12px", marginTop: "10px" }} className="card-text text-center">Personalized advice on life <br />
                                and health insurance. No spam<br />
                                and no mis-selling.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="text-center " style={{ padding: "50px 50px 100px 50px" }}>
                <a href='#' className='btn btn-primary fs-5 fw-bold w-25 p-3 mt-4  ' style={{ margin: "0 auto" }}>Sign up for free</a>
            </div>
        </div>
    )
}
export default Univers;