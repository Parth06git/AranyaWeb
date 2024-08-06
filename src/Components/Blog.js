import React, { useContext, useEffect } from 'react'
import p3 from './img/p3.jpeg'
import blogContext from '../context/blogs/blogContext'
import BlogsItems from './BlogsItems'

const Blog = () => {

    const context = useContext(blogContext)
    const { blog, getBlogs } = context

    useEffect(() => {
        getBlogs()
        document.title = 'Aranya - Blogs'
    })

    return (
        <>
            <div className="container my-2">
                <h1 className="text-center mp-5">Aranya</h1>
                <img src={p3} className="img-fluid" alt="..." />
            </div>

            <div className="container-fluid my-2">
                <h1 className="text-center text-light bg-dark py-3">Our Blogs</h1>
            </div>

            <div className="container my-3">
                {blog.map((blog) => {
                    return <BlogsItems blogs={blog} key={blog._id} />
                })}
            </div>
        </>
    )
}

export default Blog
