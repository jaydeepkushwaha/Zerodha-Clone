import React, { useState } from "react";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function Login() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState(null);

    // ✅ Recaptcha setup
    const setUpRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            // *** IMPORTANT CHANGE HERE ***
            // Pass the `auth` instance as the FIRST argument,
            // then the container ID, then the options object.
            window.recaptchaVerifier = new RecaptchaVerifier(
                auth, // <<< Auth instance as the first argument
                "recaptcha-container", // <<< Div ID as the second argument
                {
                    size: "invisible",
                    callback: (response) => {
                        console.log("Recaptcha Verified ✅");
                    },
                    // You don't usually need to explicitly set appVerificationDisabledForTesting here
                    // unless you're using a specific test setup. The error you're seeing means
                    // `auth.settings` itself is undefined when the constructor is called.
                }
            );
        }
    };

    // ... rest of your code (sendOtp, verifyOtp, return) remains the same ...

    // ✅ Send OTP
    const sendOtp = async () => {
        if (phone.length < 10) {
            alert("Please enter valid phone number");
            return;
        }
        setUpRecaptcha(); // This will now use the potentially corrected RecaptchaVerifier constructor
        try {
            const confirmation = await signInWithPhoneNumber(
                auth,
                "+91" + phone,
                window.recaptchaVerifier
            );
            setResult(confirmation);
            alert("OTP Sent ✅");
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    // ✅ Verify OTP
    const verifyOtp = async () => {
        if (!otp) return;
        try {
            await result.confirm(otp);
            alert("Login Successful 🎉");
        } catch (error) {
            console.error(error);
            alert("Invalid OTP ❌");
        }
    };

    return (




        <div className="container ">
            <div className="row p-3 ">
                <div className="col-6  ">
                    <img src="Accets/SignA.svg" alt="Signlogo" />
                </div>
                <div className="col-6 mt-4 ">
                    <h2 style={{ fontSize: "24px", color: "#424242" }}>Signup now</h2>
                    <span style={{ fontSize: "16px", color: "#9b9b9b" }}> or track your existing application</span>
                    <form>
                        <div className="input-group mt-4 mb-4">
                            <span className="input-group-text p-2" id="visible-addon"><img src="Accets/Flag.png" alt=" flag logo" style={{ height: "28px", width: "28px", borderRadius: "35%" }} />+91</span>
                            <input className="form-control p-3 w-50" onChange={(e) => setPhone(e.target.value)} type="number" autoFocus min={1000000000} max={9999999999} fdprocessedid="wsjge5" placeholder="Enter your mobile number" name="mobile" required></input>
                        </div>
                        <button className='btn btn-primary p-2 fs-5 fw-senibold w-50  ' type="button" onClick={sendOtp}>Send OTP</button>
                        <br></br>
                        <input
                            className="form-control p-3 w-50"
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <div id="recaptcha-container"></div>
                        <div>
                            <a className='btn btn-primary p-2 fs-5 fw-senibold w-50  ' onClick={verifyOtp}>Login</a>
                        </div>
                        <p className="mt-4 " style={{ fontSize: "12px", color: "#666666" }}>By proceeding, you agree to the Zerodha <a href="#"> terms</a> & <a href="#"> privacy policy</a></p>

                    </form>



                </div>
            </div>

        </div>

    )

}
export default Login;