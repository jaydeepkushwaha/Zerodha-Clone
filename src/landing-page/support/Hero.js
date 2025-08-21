import React from "react";

function Hero() {
    return (
        <div className="SupportContainer">
            <div className="SupportH d-flex">
                <div className="Supporthead">
                    <h1>Support Portal</h1>
                </div>
                <div className="Supportbtn ">
                    <a href='#' className='btn btn-primary fs-5 fw-bold w-25 p-3   '>My tickets</a>
                </div>
            </div>
            <div>
                <div className="input-group SupportA">
                    <div className="input-group-text text-center SupportC">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input type="text" className="form-control SupportB" placeholder="Eg: How do I open my account, How do i activate F&O..." aria-label="Username" aria-describedby="visible-addon" />
                    <input type="text" className="form-control d-none" placeholder="Hidden input" aria-label="Hidden input" aria-describedby="visible-addon" />
                </div>
            </div>

        </div>
    )
}
export default Hero;