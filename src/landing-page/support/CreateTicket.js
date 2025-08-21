import React from "react";

function CreateTicket() {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-8 p-5">
                    <div>
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle ticketA" type="button" data-bs-toggle="dropdown" >
                                Account Opening
                            </button>
                            <ul class="dropdown-menu ticketA">
                                <li><a href="#" class="dropdown-item" >Resident individual</a></li>
                                <li><a href="#" class="dropdown-item" >Minor</a></li>
                                <li><a href="#" class="dropdown-item" >Non Resident Indian (NRI)</a></li>
                                <li><a href="#" class="dropdown-item" >company, Partnership, HUF and LLP</a></li>
                                <li><a href="#" class="dropdown-item" >Glossary</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle ticketA" type="button" data-bs-toggle="dropdown" >
                                Your Zerodha Account
                            </button>
                            <ul class="dropdown-menu ticketA">
                                <li><a href="#" class="dropdown-item" >Your Profile</a></li>
                                <li><a href="#" class="dropdown-item" >Account Modification</a></li>
                                <li><a href="#" class="dropdown-item" >Client Master Report (CMR) and Depository Participant (DP)</a></li>
                                <li><a href="#" class="dropdown-item" >Nomination</a></li>
                                <li><a href="#" class="dropdown-item" >Transfer and Conversion of Securities</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle ticketA" type="button" data-bs-toggle="dropdown" >
                                Kite
                            </button>
                            <ul class="dropdown-menu ticketA">
                                <li><a href="#" class="dropdown-item" >IPO</a></li>
                                <li><a href="#" class="dropdown-item" >Trading FAQs</a></li>
                                <li><a href="#" class="dropdown-item" >Margin Trading Facility (MTF) and Margins</a></li>
                                <li><a href="#" class="dropdown-item" >Charts and orders</a></li>
                                <li><a href="#" class="dropdown-item" >Alerts and Nudges</a></li>
                                <li><a href="#" class="dropdown-item" >General</a></li>

                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle ticketA" type="button" data-bs-toggle="dropdown" >
                                Funds
                            </button>
                            <ul class="dropdown-menu ticketA">
                                <li><a href="#" class="dropdown-item" >Add money</a></li>
                                <li><a href="#" class="dropdown-item" >Withdraw money</a></li>
                                <li><a href="#" class="dropdown-item" >Add bank accounts</a></li>
                                <li><a href="#" class="dropdown-item" >eMandates</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle ticketA" type="button" data-bs-toggle="dropdown" >
                                Console
                            </button>
                            <ul class="dropdown-menu ticketA">
                                <li><a href="#" class="dropdown-item" >Portfolio</a></li>
                                <li><a href="#" class="dropdown-item" >Corporate actions</a></li>
                                <li><a href="#" class="dropdown-item" >Funds statment</a></li>
                                <li><a href="#" class="dropdown-item" >Reports</a></li>
                                <li><a href="#" class="dropdown-item" >Profile</a></li>
                                <li><a href="#" class="dropdown-item" >Segments</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn  dropdown-toggle ticketA" type="button" data-bs-toggle="dropdown" >
                                Coin
                            </button>
                            <ul class="dropdown-menu ticketA">
                                <li><a href="#" class="dropdown-item" >Mutual funds</a></li>
                                <li><a href="#" class="dropdown-item" >National pension scheme (NPS)</a></li>
                                <li><a href="#" class="dropdown-item" >Fixed Deposit (FD)</a></li>
                                <li><a href="#" class="dropdown-item" >Features on coin</a></li>
                                <li><a href="#" class="dropdown-item" >Payments and orders</a></li>
                                <li><a href="#" class="dropdown-item" >General</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-4 p-5">
                    <div className="orangecard">
                        <ul>
                            <li className="p-3">
                                <a href="#" >Exclusion of F&O contracts on 8 securities from August 29, 2025</a>
                            </li>
                            <li className="p-3">
                                <a href="#">Revision in expiry day of Index and Stock derivatives contracts</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-5">
                        <div className="quickHead linkA">
                            <h6>Quick links</h6>
                        </div>
                        <div >
                            <div className="linkA"><a href="#">1. Track account opening</a></div>
                            <div className="linkA"><a href="#">2. Track segment activation</a></div>
                            <div className="linkA"><a href="#">3. Intraday margins</a></div>
                            <div className="linkA"><a href="#">4. Kite user manual</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateTicket;