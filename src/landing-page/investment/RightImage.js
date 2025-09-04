import React from "react";


function RightImage({
    imageUrl,
    productName,
    productDiscription,
    Available,
    linkkite,
    linkConsole,
    smallCase,
    Stockreport,
    streak,
    Market

}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6  " style={{ padding: "0 50px 0 10px" }} >
                    <h2 style={{ marginBottom: "20px" }}>{productName}</h2>
                    <p style={{ lineHeight: "2" }}>{productDiscription}</p>
                    <div className="mb-4">
                        <a href="#" style={{ color: "#666" }}> <i className="fa-solid fa-circle-exclamation "></i>{Available} </a>
                    </div>
                    <div>
                        <div className="linkcontainer">
                            <a className="lefttlink" href="#">{linkkite}&rarr;</a>
                            <a className="rightlink" href="#">{Stockreport}&rarr;</a>
                        </div>
                        <div className="linkcontainer">
                            <a className="lefttlink" href="#">{linkConsole}&rarr;</a>
                            <a className="rightlink" href="#">{streak}&rarr;</a>
                        </div>
                        <div className="linkcontainer">
                            <a className="lefttlink" href="#">{smallCase}&rarr;</a>
                            <a className="rightlink" href="#">{Market}&rarr;</a>
                        </div>
                    </div>

                </div>
                <div className="col-6 ">
                    <a href="#" ><img className="Investimg" src={imageUrl} /></a>
                </div>
            </div>

        </div>
    )
}
export default RightImage;