import React from 'react';

function Stats() {
    return (
        <div className=' container '>
            <div className='row'>
                <div className='col-5 ml-5 p-5'>
                    <h1 className='fs-3 mb-5' style={{ color: "#424242" }}>Trust with confidence</h1>
                    <h3 className='fs-4 fw-semibold' style={{ color: "#424242" }}>Customer-first always</h3>
                    <p style={{ color: "#666666" }} className='mb-5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s
                        largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h3 className='fs-4' style={{ color: "#424242" }}>No spam or gimmicks</h3>
                    <p style={{ color: "#666666" }} className='mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h3 className='fs-4' style={{ color: "#424242" }}>The Zerodha universe</h3>
                    <p style={{ color: "#666666" }} className='mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fs-4' style={{ color: "#424242" }}>Do better with money</h3>
                    <p style={{ color: "#666666" }} className='mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7 p-5'>
                    <img src='Accets/ecosystem.png' alt='Home hero' style={{ width: "100%" }} />
                    <div className='  mt-5 fw-semibold text-center' style={{ color: "#387ED1" }}>
                        <a style={{ textDecoration: "none" }} href='#'>Explore our product &rarr;</a>
                        <a style={{ textDecoration: "none", marginLeft: "24px" }} href='#'>Try kite demo &rarr;</a>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <img src="Accets/pressLogos.png" style={{ width: "60%", marginBottom:"45px"}} />
            </div>
        </div>
    )
}
export default Stats;