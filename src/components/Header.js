import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import wishlist  from '../images/wishlist.svg'
import user  from '../images/user.svg'
import cart  from '../images/cart.svg'


const Header = ()=>{
    return(
        <>
        <header className='header-top-strip py-3'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
                    </div>
                    <div className='col-6'>
                    <p className='text-end text-white'>Hotline: <a className='text-white' href="tel:+917895340519">+917895340519</a></p>
                    </div>

                </div>                
            </div>

        </header>

        <header className='header-upper py-3'>
            <div className='container-xxl'>
                <div className='row align-items-center'>
                    <div className='col-2'>
                        <h2><Link to="/" className='text-white'>LOGO </Link></h2>
                    </div>
                    <div className='col-5'>
                        <div className="input-group">
                        <input 
                         type="text" 
                         className="form-control"
                         placeholder="Search" 
                         aria-label="Search" 
                         aria-describedby="basic-addon2"/>
                        <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6'/></span>
                        </div>
                    </div>
                    <div className='col-5'>
                        <header className='header-upper-links d-flex align items-center justify-content-between'>
                            {/* <div>
                                <Link to ="/" className='d-flex align-items-center gap-10 text-white'>
                                    <img src="images/compare.svg" alt="compare"/>
                                    <p className='mb-0'>Compare<br/> Products</p>
                                </Link>
                            </div> */}
                            <div>
                                <Link to ="/wishlist" className='d-flex align-items-center gap-10 text-white'>
                                    <img src={wishlist} alt="wishlist"/>
                                    <p className='mb-0'>Favourite<br/> Wishlist</p>
                                </Link>
                            </div>
                            <div>
                                <Link to ="/login" className='d-flex align-items-center gap-10 text-white'>
                                    <img src={user} alt="yser"/>
                                    <p className='mb-0'>Login<br/> My Account</p>
                                </Link>
                            </div>
                            <div>
                                <Link to ="/" className='d-flex align-items-center gap-10 text-white'>
                                    <img src={cart} alt="cart"/>
                                    <div className='d-flex flex-column'>
                                        <span className='badge bg-white text-dark'></span>
                                        <p className='mb-0'>$ 500</p>
                                    </div>
                                </Link>
                            </div>
                        </header>
                    </div>

                </div>
            </div>
        </header>

        <header className='header-bottom py-3'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='menu-bottom d-flex align-items-center gap-30'>
                            <div>
                                <div className="dropdown">
                                    <button 
                                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15" 
                                        type="button" 
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                    <span className='me-5 d-inline-block'>Shop Categories</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/" className="dropdown-item text-white">Action</Link></li>
                                        <li><Link to="/" className="dropdown-item text-white">Another action</Link></li>
                                        <li><Link to="/" className ="dropdown-item text-white">Something else here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menu-links'>
                                <div className='d-flex align-items-center gap-15'>
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/store">Our Store</NavLink>
                                    <NavLink to="/blogs">Blogs</NavLink>
                                    <NavLink to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}  

export default Header;