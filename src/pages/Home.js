import React from "react";
import { Link } from "react-router-dom";

const Home =()=>{
    return(
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative p-3">
                                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner"/>
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
                                    <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>Best Sale</h4>
                                        <h5>Laptops Max  </h5>
                                        <p> From $1699 <br/> or $64.61/mo</p>
                                    </div>
                                </div>
                            
                                <div className="small-banner position-relative ">
                                    <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>Buy IPad Air </h5>
                                        <p> From $599 <br/>or $49.91/mo. for 12mo.*</p>
                                    </div>
                                </div>
                            
                                <div className="small-banner position-relative ">
                                    <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% OFF</h4>
                                        <h5>Smart Watch 7  </h5>
                                        <p> Shop the latest <br/>band style and colors.</p>
                                    </div>
                                </div>
                            
                                <div className="small-banner position-relative ">
                                    <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="main banner"/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>Free Engraving</h4>
                                        <h5>Airpods Max</h5>
                                        <p> High-fidelity playback <br/> & ultra low-distraction</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;