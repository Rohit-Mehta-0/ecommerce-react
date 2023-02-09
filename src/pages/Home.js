import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import { services } from "../utils/Data";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import mainbanner1 from '../images/main-banner-1.jpg'
import catbanner1 from '../images/catbanner-01.jpg'
import catbanner2 from '../images/catbanner-02.jpg'
import catbanner3 from '../images/catbanner-03.jpg'
import catbanner4 from '../images/catbanner-04.jpg'
import laptop from '../images/laptop.jpg'
import homeapp from '../images/homeapp.jpg'
import camera from '../images/camera.jpg'
import tv from '../images/tv.jpg'
import headphone from '../images/headphone.jpg'
import acc from '../images/acc.jpg'
import speaker from '../images/speaker.jpg'
import brand from '../images/brand-01.png'
import brand2 from '../images/brand-02.png'
import brand3 from '../images/brand-03.png'
import brand4 from '../images/brand-04.png'
import brand5 from '../images/brand-05.png'
import brand6 from '../images/brand-05.png'
import brand7 from '../images/brand-05.png'
import brand8 from '../images/brand-05.png'




const Home =()=>{
    return(
        <>
            <Meta title={"Home"}/>
            <BreadCrumb title={"Home"}/>
            <Container class1="home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative p-3">
                                <img src={mainbanner1} className="img-fluid rounded-3" alt="main banner"/>
                                <div className="main-banner-content position-absolute">
                                    <h4 className="">SUPERCHARGED FOR PODS</h4>
                                    <h5>iPads S13+ Pro  </h5>
                                    <p> From $900 <br/>or $40.61/mo</p>
                                    <Link to='/' className="button">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                                <div className="small-banner position-relative ">
                                    <img src={catbanner1} className="img-fluid rounded-3" alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>Best Sale</h4>
                                        <h5>Laptops Max  </h5>
                                        <p> From $1699 <br/> or $64.61/mo</p>
                                    </div>
                                </div>
                            
                                <div className="small-banner position-relative ">
                                    <img src={catbanner2}className="img-fluid rounded-3" alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>Buy IPad Air </h5>
                                        <p> From $599 <br/>or $49.91/mo. for 12mo.*</p>
                                    </div>
                                </div>
                            
                                <div className="small-banner position-relative ">
                                    <img src={catbanner3} className="img-fluid rounded-3" alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% OFF</h4>
                                        <h5>Smart Watch 7  </h5>
                                        <p> Shop the latest <br/>band style and colors.</p>
                                    </div>
                                </div>
                            
                                <div className="small-banner position-relative ">
                                    <img src={catbanner4} className="img-fluid rounded-3" alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>Free Engraving</h4>
                                        <h5>Airpods Max</h5>
                                        <p> High-fidelity playback <br/> & ultra low-distraction</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            </Container >
            
            <Container class1="home-wrapper-2 py-5">
                 <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                {
                                    services?.map((i,j)=>{
                                        return(
                                            <div className="d-flex align-items-center gap-15" key={j}>
                                                <img src={i.image} alt="services"/>
                                                <div>
                                                    <h6>{i.title}</h6>
                                                    <p className="mb-0">{i.tagline}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                 </div>
            </Container>

          <Container class1="home-wrapper-2 py-5">
                <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Computer & Laptop</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={laptop} alt="camera"/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Cameras & Videos</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={camera} alt="camera"/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Smart Television</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={tv} alt="camera"/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Smart watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={tv} alt="camera"/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Headphone</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={headphone}alt="camera"/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Acessories</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={acc} alt="camera"/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Portable Speakers</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={speaker} alt="camera"/>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>Home Appliances</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={homeapp} alt="camera"/>
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
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>                        
                    </div>
          </Container>

            <Container class1="marque-wrapper py-5">
            <div className="row">
                        <div className="col-12">
                             <div className="marquee-inner-wrapper bg-white .card-wrapper">
                                <Marquee>
                                    <div className="mx-4 w-25">
                                        <img src={brand} alt ="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src={brand2} alt ="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src={brand3} alt ="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src={brand4} alt ="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src={brand5} alt ="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src={brand6} alt ="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src={brand7} alt ="brand" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src={brand8} alt ="brand" />
                                    </div>
                                </Marquee>
                             </div>
                        </div>
                    </div>
            </Container>

            <Container class1="blog-wrapper py-5 home-wrapper-2">
                <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Latest Blogs</h3>
                        </div>
                        <div className="col-3">
                            <BlogCard/>
                        </div>
                        <div className="col-3">
                            <BlogCard/>
                        </div><div className="col-3">
                            <BlogCard/>
                        </div><div className="col-3">
                            <BlogCard/>
                        </div>
                    </div>
            </Container>         

            </>
    )
}

export default Home;