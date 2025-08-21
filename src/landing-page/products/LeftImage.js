import React from "react";

function LeftImage({ imageUrl, productName, priductDiscription, tryDemo, learnDemo, appStore, playStore}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <a href="#"><img src={imageUrl} /></a>
                </div>
                <div className="col-6  mt-5" style={{ padding: "50px 50px 0 200px" }} >
                    <h2 style={{ marginBottom: "20px" }}>{productName}</h2>
                    <p style={{ margin: "16px 0 15px 0", lineHeight: "2" }}>{priductDiscription}</p>
                    <div className="mb-4">
                        <a href="#">{tryDemo} Try demo &rarr;</a>
                        <a href="#" style={{ marginLeft: "70px" }}>{learnDemo}Learn more &rarr;</a>
                    </div>
                    <div>
                        <a href="#">{playStore} <img src="Accets/googlePlayBadge.svg" /> </a>
                        <a href="#" style={{ marginLeft: "20px" }}>{appStore} <img src="Accets/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default LeftImage;