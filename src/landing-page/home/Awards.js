import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="Accets/education.svg" />
        </div>
        <div className="col-6" >
          <h3 style={{color:"#424242"}}>Free and open market education</h3>
          <p className="mt-4 mb-4">Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.</p>
          <a style={{ textDecoration: "none", color: "#387ED1" }} className="fw-semibold fs-6 mb-4" href="#">Varsity &rarr;</a>
          <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a style={{ textDecoration: "none", color: "#387ED1" }} className="fw-semibold fs-6 mb-4" href="#">TradingQ&A  &rarr;</a>
        </div>
      </div>
    </div>
  );
}
export default Awards;
