import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi'
import blog from '../images/blog-1.jpg'

const SingleBlog = () =>{
    return(
        <>
            <Meta title={"Blog Name"}/>
            <BreadCrumb title={"Blog Name"}/>

            <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to="/blogs" className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft/>
                                 Go back to Blogs</Link>
                            <h3 className='title'>
                                A Beautiful Sunday Morning Renainssance
                            </h3>
                            <img src={blog}  className="img-fluid w-100 my-4" alt="blog"/>
                            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SingleBlog
