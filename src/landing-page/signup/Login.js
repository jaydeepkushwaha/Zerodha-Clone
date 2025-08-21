import React from "react";

function Login() {
    return (
        <div className="container ">
            <div className="row p-3 ">
                <div className="col-6  ">
                    <img src="Accets/SignA.svg" alt="Signlogo" />
                </div>
                <div className="col-6 mt-4 ">
                    <h2 style={{fontSize:"24px", color:"#424242"}}>Signup now</h2>
                    <span style={{fontSize:"16px", color:"#9b9b9b"}}> or track your existing application</span>
                    <form>
                        <div className="input-group mt-4 mb-4">
                            <span className="input-group-text p-2" id="visible-addon"><img src="Accets/Flag.png" alt=" flag logo" style={{ height: "28px", width: "28px", borderRadius: "35%" }} />+91</span>
                            <input className="form-control p-3 w-50" type="number" autoFocus min={1000000000} max={9999999999} fdprocessedid="wsjge5" placeholder="Enter your mobile number" name="mobile" required></input>
                        </div>
                        <div>
                            <a className='btn btn-primary p-2 fs-5 fw-senibold w-50  '> Get OTP</a>
                        </div>
                        <p className="mt-4 " style={{fontSize:"12px", color:"#666666"}}>By proceeding, you agree to the Zerodha <a href="#"> terms</a> & <a href="#"> privacy policy</a></p>
                    
                    </form>
                     


                </div>
            </div>

        </div>
    )

}
export default Login;