import React from "react";

function Explore() {
    return (
        <div className="container  ">
            <div style={{ textAlign: "center" }}>
                <h4>Explore different account types</h4>
            </div>
            <div className="d-flex justify-content-around CardA ">
                <a href="#">
                    <div className="card ExploreCard" >
                        <div className="card-body">
                            <h5 className="card-title"  style={{marginBottom:"20px"}}>Individual Account</h5>
                            <p className="card-text" style={{marginTop:"16px"}}>Invest in equity, mutual funds and derivatives</p>
                        </div>
                    </div>
                </a>
                <a href="#" className="">
                    <div className="card ExploreCard ">
                        <div className="card-body">
                            <h5 className="card-title"  style={{marginBottom:"20px"}}>HUF Account</h5>
                            <p className="card-text" style={{marginTop:"16px"}}>Make tax-efficient investments for your family</p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="card ExploreCard">
                        <div className="card-body">
                            <h5 className="card-title " style={{marginBottom:"20px"}}>NRI Account</h5>
                            <p className="card-text" style={{marginTop:"16px"}}>Invest in equity, mutual funds, debentures, and more</p>
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <div className="d-flex justify-content-around CardA ">
                    <a href="#">
                        <div className="card ExploreCard" >
                            <div className="card-body">
                                <h5 className="card-title">Minor Account</h5>
                                <p className="card-text" style={{marginTop:"16px"}}>Teach your little ones about money & invest for their future with them</p>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="">
                        <div className="card ExploreCard ">
                            <div className="card-body">
                                <h5 className="card-title">Corporate /LLP/ Partnership</h5>
                                <p className="card-text"  style={{marginTop:"16px"}}>Manage your business surplus and investments easily</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )

}
export default Explore;