import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
       <>
        <footer className='py-4'>
            <div className='container-xxl'>
                <div className='row align-items-center'>
                    <div className='col-5'>
                        <div className='footer-top-data d-flex gap-30 align-items-center'>
                            <img src="images/newsletter.png" alt="jewsletter"/>
                            <h2 className='mb-0 text-white'>Sign up for new letter</h2>
                        </div>
                    </div>
                    <div className='col-7'>
                         <div className="input-group">
                        <input 
                         type="text" 
                         className="form-control py-1"
                         placeholder="Search" 
                         aria-label="Search" 
                         aria-describedby="basic-addon2"/>
                        <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <footer className='py-4'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-4'>
                        <h4 className='text-white mb-4'>Contact Us</h4>
                        <div>
                            <address className='text-white fs-6'>Hno. 277 Jawahar chowk, <br/>Berinag ,Pithoragarh <br/>
                            Pincode : 262531
                            </address>
                        </div>
                    </div>
                    <div className='col-3'>
                        <h4 className='text-white mb-4'>Information</h4>
                        <div className='footer-links d-flex flex-column'>
                            <Link className="text-white py-2 mb-1" to="/">Privacy Policy</Link>
                            <Link className="text-white py-2 mb-1" to="/">Refund Policy</Link>
                            <Link className="text-white py-2 mb-1" to="/">Shipping Policy</Link>
                            <Link className="text-white py-2 mb-1" to="/">Terms of service</Link>
                            <Link className="text-white py-2 mb-1" to="/">Blogs</Link>

                        </div>
                    </div>
                    <div className='col-3'>
                        <h4 className='text-white mb-4'>Account</h4>
                        <div className='footer-links d-flex flex-column'>
                            <Link className="text-white py-2 mb-1" to="/">About Us</Link>
                            <Link className="text-white py-2 mb-1" to="/">Faq</Link>
                            <Link className="text-white py-2 mb-1" to="/">Contact</Link>
                        </div>
                    </div>
                    <div className='col-2'>
                        <h4 className='text-white mb-4'>Quick Links</h4>
                        <div className='footer-links d-flex flex-column'>
                            <Link className="text-white py-2 mb-1" to="/">Laptops</Link>
                            <Link className="text-white py-2 mb-1" to="/">Headphones</Link>
                            <Link className="text-white py-2 mb-1" to="/">Tablets</Link>
                            <Link className="text-white py-2 mb-1" to="/">Watch</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <footer className='py-3'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='text-center text-white'>&copy;{new Date().getFullYear()} Powered by Rohit </p>
                    </div>
                </div>
            </div>
        </footer>

       </>
    );
}

export default Footer;