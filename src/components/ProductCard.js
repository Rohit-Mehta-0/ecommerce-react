import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link, useLocation} from 'react-router-dom'
import prodcompare from '../images/prodcompare.svg'
import wish from '../images/wish.svg'
import wishlist from '../images/wishlist.svg'
import watch from '../images/watch.jpg'
// import watch2 from '../images/watch.jpg'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'


const ProductCard =(props)=>{
    const {grid} = props
    let location = useLocation();
    return(
        <>
            <div className={`${location.pathname ===     "/store" ? `col-${grid}` : "col-3"}`}>
                
            <Link to="/:id" className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <button className ="border-0 bg-transparent">
                         <img src={wishlist} alt="wishlist"/>
                    </button>
                </div>
                <div className='product-image'>
                    <img src={watch} alt="productimage"/>
                </div>

                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-tittle'>
                        Kids headphone bulk 10 pack multi coloured for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className='discription'>skfhasdfh skfhashdfshfk asfas flkashfkas hfas fksahf askdfh askjhf asdhf asdkfh askdfh sad</p> 
                    <p className='price'>$ 100.00</p>

                </div>

                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <button className ="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare"/>
                        </button>
                        <button className ="border-0 bg-transparent">
                            <img src={view} alt="view"/>
                        </button>
                        <button className ="border-0 bg-transparent">
                            <img src={addcart} alt="addCart"/>
                        </button>                        
                    </div>
                </div>
            </Link>
        </div>

        <div className={`${location.pathname ===     "/store" ? `col-${grid}` : "col-3"}`}>
            <div className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <button className ="border-0 bg-transparent">
                    <img src={wish} alt="wishlist"/>
                    </button>
                </div>
                <div className='product-image'>
                    <img src={watch} alt="productimage"/>
                </div>

                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-tittle'>
                        Kids headphone bulk 10 pack multi coloured for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className='discription'>skfhasdfh skfhashdfshfk asfas flkashfkas hfas fksahf askdfh askjhf asdhf asdkfh askdfh sad</p>
                    <p className='price'>$ 100.00</p>

                </div>

                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                    <button className ="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare"/>
                        </button>
                        <button className ="border-0 bg-transparent">
                            <img src={view}alt="view"/>
                        </button>
                        <button className ="border-0 bg-transparent">
                            <img src={addcart} alt="addCart"/>
                        </button>                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductCard;