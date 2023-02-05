import React, {useState} from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from 'react-rating-stars-component'
import {AiOutlineHeart} from 'react-icons/ai'
import Container from "../components/Container";
const SingleProduct = ()=>{

    const [orderedProduct, setOrderedProduct] = useState(false);
    return(
        <>
            <Meta title={"Product Name"}/>
            <BreadCrumb title={"Product Name"}/>
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <img src="/images/tab.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">Kids Headphone Bulk 10 Pack Multi Colored For Students</h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$ 100</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor={"#ffd700"}
                                    />
                                    <p className="mb-0 t-review">(2 Reviews)</p>
                                </div>
                                <a className="review-btn" href="#review">Write a Review</a>
                            </div>

                            <div className="border-bottom py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Type : </h3><p className="product-data">Pad</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Brand : </h3><p className="product-data">Samsung</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Category : </h3><p className="product-data">Tablet</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Tags : </h3><p className="product-data">IPad</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Availability : </h3><p className="product-data">In Stock</p>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className="product-heading">Size : </h3>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary ">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary ">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary ">L</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary ">XL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10  align-items-center gap-15 mt-3 mb-3">
                                    <h3 className="product-heading">Quantity : </h3> 
                                    <div className="">
                                        <input 
                                            type="number" 
                                            name="" 
                                            placeholder="1"
                                            min={1} max={9}
                                            className="form-control"                                      
                                            style={{width: "70px"}}
                                        />
                                    </div>

                                    <div className="d-flex align-items-center gap-30 ms-5">
                                        <button className="button border-0" type="submit">Add to Cart</button>
                                        <button className="button signup border-0" type="submit">Buy It Now</button>

                                    </div>

                                </div>

                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href="" alt="" className="fs-5 me-2"><AiOutlineHeart/> Add to Wishlist</a>
                                    </div>
                                </div>

                                <div className="d-flex gap-10 flex-column my-3">
                                    <h3 className="product-heading">Shipping & Returns</h3>
                                    <p className="product-data">
                                        Free Shipping and returns available on all orders ! <br/> {" "}
                                        We ship order within
                                        <b> 3 - 5 business days</b>
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                    </div>
            </Container>
            

            <Container class1="description-wrapper py-5 home-wrapper-2">
            <div className="row">
                        <div className="col-12">
                                <h4>Description</h4>
                            <div className="bg-white p-3"> 
                                <p >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                </p>
                            </div>
                        </div>
                    </div>
            </Container>
           
           <Container class1="reviews-wrapper py-5 home-wrapper-2">
           <div className="row">
                        <div className="col-12">
                            <h3 id="review">Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Customers Review</h4>
                                        <div className="d-flex align-items-center g-10">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0"> Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {orderedProduct && (<div>
                                        <a className="text-dark text-decoration-underline" href="">Write a Review</a>
                                    </div>
                                    )}
                                </div>
                               < br/>
                                <div  className="review-form py-4">
                                    <h4>Write a Review</h4>
                                        <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className="w-100 form-control" cols="30" rows='4' placeholder="Comments"></textarea>
                                        </div>  

                                        <div className="d-flex justify-content-end">
                                            <button className="button border-0">Submit Review</button>
                                        </div>
                                        </form>                                                                         
                                </div>
                                <div className="reviews mt-3">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Rohit</h6>
                                        <ReactStars
                                             count={5}
                                             size={24}
                                             value={3}
                                             edit={false}
                                             activeColor="#ffd700"
                                        />
                                        </div>
                                        <p className="mt-3">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                    </div>                                        
                                </div>
                            </div>
                        </div>
                    </div>
           </Container>

           <Container class1="blog-wrapper py-5 home-wrapper-2">
           <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Featured Collection</h3>
                        </div>
                        <ProductCard/>
                                            
                    </div>
           </Container>
            <section  className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    
                </div>
            </section>

           
        </>
    )
}

export default SingleProduct