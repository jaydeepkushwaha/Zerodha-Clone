import React from "react";

function LeftImage({ imageUrl, productName, priductDiscription, learnMore}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4  mt-5" style={{ padding: "150px 0 0 50px" }} >
                    <h2 style={{ marginBottom: "20px" }}>{productName}</h2>
                    <p style={{ margin: "16px 0 15px 0" , lineHeight:"2" }}>{priductDiscription}</p>
                    <div className="mb-4">
                        <a href="#">{learnMore} Learn more &rarr;</a>
                    </div>
                  
                </div>
                <div className="col-5 p-5  "  >
                   <a href="#"> <img style={{margin:"0 0 0 80px"}}  src={imageUrl} /></a>
                </div>  
            </div>

        </div>
    )
}
export default LeftImage;