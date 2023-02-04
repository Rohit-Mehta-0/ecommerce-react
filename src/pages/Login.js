import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
const Login = ()=>{
    return(
        <>  
            <Meta title={"Login"}/>
            <BreadCrumb title={"Login"}/>

            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Login</h3>
                            <form action ="" className="d-flex flex-column gap-15">
                                <div>
                                    <input type="email" name="email" placeholder="Email"className="form-control"/>
                                </div>
                                <div>
                                    <input type='password' name="password" placeholder="Password"className="form-control"/>
                                </div>
                                <div className="mt-3">
                                    <Link to="/forgetPassword">Forget Password?</Link>

                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center"> 

                                        <button className="button border-0" type="submit">Login</button>
                                        <Link to="/signup" className="button signup">Sign Up</Link>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;