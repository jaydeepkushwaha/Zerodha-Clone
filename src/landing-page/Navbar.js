import React from 'react';

function Navbar() {
    return (
        <div className='container fixed-top ' style={{ backgroundColor: "white" }}>
            <nav className="navbar navbar-expand-lg  row border-bottom pb-3">
                <div className=" col-6">
                    <a className="navbar-brand" href="#"><img className="mb-2" style={{ height: "17px", width: "129.41px", alignItems: "center" }} src="Accets/logo.svg" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse col-6 " id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link signup active" style={{ color: "#666666" }} aria-current="page" href="#">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: "#666666" }} href="#">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active " style={{ color: "#666666" }} href='#'>Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color: "#666666" }} href='#'>Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color: "#666666" }} href='#'>Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " style={{ color: "#666666" }} href='#'><i className="fa-solid fa-bars"></i></a>
                            </li>

                        </ul>
                    </form>
                </div>

            </nav>

        </div>
    )
}
export default Navbar;