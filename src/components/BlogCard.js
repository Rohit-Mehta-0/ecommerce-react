import React from 'react'
import {Link } from 'react-router-dom'
import blog1 from '../images/blog-1.jpg'
const BlogCard = () =>{
    return(

            <div className='blog-card'>
                <div className='card-image'>
                    <img src={blog1} className='img-fluid' alt= "Blog"/>
                </div>
                <div className='blog-content'>
                    <p className='date'>1 Jan 2023</p>
                    <h5 className='title'>A beautiful sunday morning renainssance</h5>
                    <p className='desc'></p>
                    <Link to="blog" className='button'>Read More</Link>
                </div>
            </div>
 
    )
}

export default BlogCard

