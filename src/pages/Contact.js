import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {AiOutlineHome} from "react-icons/ai"
import {BiPhoneCall} from "react-icons/bi"
import {BiInfoCircle} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"




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
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <input className="form-control" type="text" placeholder="Name"></input>
                                    </div>
                                    <div>
                                        <input className="form-control" type="text" placeholder="Email"></input>
                                    </div>
                                    <div>
                                        <input className="form-control" type="text" placeholder="Mobile No."></input>
                                    </div>
                                    <div>
                                        <textarea name="" id="" className="w-100 form-control" cols="30" rows='4' placeholder="Comments"></textarea>
                                    </div>  

                                    <div>
                                        <button className="button border-0">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="">
                                <h3 className="contact-title">Get in Touch With Us</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiOutlineHome  className="fs-5"/>
                                            <address>Hno .277 Jawahar chowk, Berinag, Pithoragarh,Uttarakhand</address></li>
                                        <li className="mb-3 d-flex gap-15                   align-items-center">
                                            <BiPhoneCall className="fs-5"/>
                                            <a href ="tel: +917895340519">+917895340519 </a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiOutlineMail className="fs-5"/>
                                            <a href ="mailto: mehtarohit7644@gmail.com">+mehtarohit7644@gmail.com </a>
                                                                                        
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <BiInfoCircle className="fs-5"/>
                                            <p className="mb-0">Monday - Friday 10AM- 8PM</p>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Contact;