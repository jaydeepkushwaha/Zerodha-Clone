import React from "react";

function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 mr-5 ml-3">
                    <img className="mb-2" style={{ height: "20px", width: "152.25px" }} src="Accets/logo.svg" />
                    <p className=" fw-semibold mt-3" style={{ color: "#424242", fontSize: "12px" }}>© 2010 - 2025, Zerodha Broking Ltd.

                    <br /> All rights reserved.</p>
                    <div style={{ fontSize: "20px", color: "#424242" }} className="d-flex flex-row mt-3">
                        <i class="fa-brands fa-x-twitter pt-3 pr-4 pb-3"></i>
                        <i class="fa-brands fa-facebook p-3"></i>
                        <i class="fa-brands fa-instagram p-3"></i>
                        <i class="fa-brands fa-linkedin-in p-3"></i>
                    </div>
                    <div style={{ fontSize: "20px", color: "#424242" }} className="d-flex flex-row mt-3">
                        <i class="fa-brands fa-youtube pt-3 pr-4 pb-3"></i>
                        <i class="fa-brands fa-whatsapp p-3"></i>
                        <i class="fa-brands fa-telegram p-3"></i>
                    </div>
                </div>
                <div className="col-9">
                    <table >
                        <th style={{ color: "#424242", fontSize: "18px", marginTop:"20px"}}>
                            <td> Account</td>
                            <td>Support</td>
                            <td>Company</td>
                            <td>Quick links</td>
                        </th>
                        <tbody>
                            <td><a>Open demat account</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default Footer;