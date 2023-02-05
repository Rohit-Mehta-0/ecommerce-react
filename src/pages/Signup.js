import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {Link} from 'react-router-dom'
import Container from "../components/Container";

const Signup = ()=>{
    return(
        <>  
             <Meta title={"Sign Up"}/>
            <BreadCrumb title={"Sign Up"}/>

            <Container class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Sign Up</h3>
                            <form action ="" className="d-flex flex-column gap-15">
                                <div>
                                    <input type="text" name="firstname"
                                     placeholder="First Name"className="form-control"/>
                                </div>
                                <div>
                                    <input type="text" name="lastname" 
                                    placeholder="Last Name"className="form-control"/>
                                </div>
                                <div>
                                    <input type="tel" name="mobile" 
                                    placeholder="Mobile No."
                                    className="form-control"/>
                                </div>
                                <div>
                                    <input type="email" name="email" placeholder="Email"className="form-control"/>
                                </div>
                                <div>
                                    <input type='password' name="password" placeholder="Password"className="form-control"/>
                                </div>
                                <div className="mt-3">
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center"> 

                                        <button className="button border-0">Create New Account</button>
                                        <Link to="/login" className="button signup">Log In</Link>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signup;