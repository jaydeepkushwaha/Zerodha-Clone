import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='container fixed-top ' style={{ backgroundColor: "white" }}>
            <nav className="navbar navbar-expand-lg  row border-bottom pb-3">
                <div className=" col-6">
                    <Link className="navbar-brand" to="/"><img className="mb-2" style={{ height: "17px", width: "129.41px", alignItems: "center" }} src="Accets/logo.svg" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse col-6 " id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link signup active" style={{ color: "#666666" }} aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" style={{ color: "#666666" }} to="/About">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active " style={{ color: "#666666" }} to='/Product'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active " style={{ color: "#666666" }} to='Pricing'>Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active " style={{ color: "#666666" }} to='/Support'>Support</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active " style={{ color: "#666666" }} to='#'><i className="fa-solid fa-bars"></i></Link>
                            </li>

                        </ul>
                    </form>
                </div>

            </nav>

        </div>
    )
}
export default Navbar;