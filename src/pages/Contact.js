import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Contact = ()=>{
    return(
        <>  
            <Meta title={"Contact Us"}/>
            <BreadCrumb title={"Contact Us"}/>

            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-wrapper d-flex justify-content-between">
                            <div className="">
                                <h3 className="contact-title">Contact Us</h3>
                                <form action="">
                                    <div>
                                        <input className="form-control" type="text"></input>
                                    </div>
                                </form>
                            </div>
                            <div className="">
                                <h3 className="contact-title">Get in Touch With Us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Contact;