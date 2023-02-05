import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg"
const Checkout = () =>{
    return(
        <>
            <div className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">LOGO</h3>
                                <nav 
                                    aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link className ="text-dark"to="/cart">Cart</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Information </li>
                                        <li className="breadcrumb-item">shipping</li>
                                        <li className="breadcrumb-item active" aria-current="page">Payment</li>
                                    </ol>
                                    </nav> 

                                    <h4 className="title">Contact Information</h4>
                                    <p className="user-details">
                                        Rohit Mehta <br/>
                                        mehtarohit7644@gmail.com
                                    </p>    

                                    <h4 className="mb-3">Shipping Address</h4>

                                    <form action="" className="d-flex gap-15 flex-wrap justify-content-between">
                                        <div className="w-100">
                                            <select name="" className="form-control form-select" id="">
                                            <option value="" selected disabled>Select Country</option>
                                            </select>
                                        </div>

                                        <div className="flex-grow-1">
                                            <input className="form-control" placeholder="First Name"type="text"></input>
                                        </div>
                                        <div className="flex-grow-1">
                                            <input className="form-control" placeholder="Last Name" type="text"></input>
                                        </div>
                                        <div className="w-100">
                                            <input className="form-control" placeholder="Address" type="text"></input>
                                        </div>
                                        <div className="w-100">
                                            <input className="form-control" placeholder="Appartment, Suite etc" type="text"></input>
                                        </div>
                                        <div className="flex-grow-1"> 
                                            <input className="form-control"  placeholder="City" type="text"></input>
                                        </div>
                                        <div className="flex-grow-1">
                                            <select name="" className="form-control form-select" id="">
                                                <option value="" selected disabled>Select State</option>
                                            </select>
                                        </div>
                                        <div className="flex-grow-1" >
                                            <input className="form-control"  placeholder="Pin Code" type="text"></input>
                                        </div>
                                        <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <Link to="/cart" className="text-dark"><BiArrowBack/> Return to Cart</Link>
                                                <Link to="/cart" className="button">Continue to shipping</Link>

                                            </div>
                                        </div>
                                    </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4"> 
                            <div className="d-flex gap-10 mb-2 align-items-center">
                                <div className="w-75 d-flex gap-10">
                                    <div className="w-25 position-relative">
                                        <span style={{"top":"-10px","right":"2px"}}className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                        <img className="img-fluid" src={watch} alt=""/>
                                    </div>
                                    <div >
                                        <h5 className="title"> headphone</h5>
                                        <p>jglsjd</p>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5> $100</h5>
                                </div>
                            </div>
                            </div>
                            <div className="border-bottom py-4">
                            <div className="d-flex justify-content-between align-item-centerN">
                                <p>SubTotal</p>
                                <p>$100</p>
                            </div>
                            <div className="d-flex justify-content-between align-item-centerN">
                                <p className="mb-0">Shipping</p>
                                <p className="mb-0">$100</p>
                            </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                                <h4 className="total">Total</h4>
                                <h5 className="price">$100</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout