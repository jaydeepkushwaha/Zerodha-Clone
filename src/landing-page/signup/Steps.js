import React from "react";

function Steps() {
    return(
        <div className="container text-center">
            <h3>Steps to open a demat account with Zerodha</h3>
            <div className="row">
                <div className="col-6 mt-5">
                    <img src="Accets/StepA.svg"/>
                </div>
                <div className="col-6 mt-5">
                    <div className="d-flex ">
                       <div style={{alignContent:"center"}}> <div style={{height:"28px", width:"28px " ,border:"1px solid #ddd", borderRadius:"50%", marginRight:"15px"}} >01</div></div>
                        <h4 className="border-bottom"  style={{margin:"20px 0 15px 15px" , fontSize:"20px" ,  paddingBottom:"15px"}}>Enter the requested details</h4>
                    </div>
                    <div className="d-flex text-center">
                       <div style={{alignContent:"center"}}> <div style={{height:"28px", width:"28px " ,border:"1px solid #ddd", borderRadius:"50%", marginRight:"15px"}} >02</div></div>
                        <h4 className="border-bottom"  style={{margin:"20px 0 15px 15px" , fontSize:"20px" , paddingBottom:"15px"}}>Complete e-sign & verification</h4>
                    </div>
                    <div className="d-flex text-center " >
                       <div style={{alignContent:"center"}}> <div style={{height:"28px", width:"28px " ,border:"1px solid #ddd", borderRadius:"50%", marginRight:"15px"}} >03</div></div>
                        <h4   style={{margin:"20px 0 15px 15px", fontSize:"20px"}}>Start investing!</h4>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Steps;