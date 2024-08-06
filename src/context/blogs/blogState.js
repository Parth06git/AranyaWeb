import React, { useState } from 'react'
import BlogContext from './blogContext'

const BlogState = (props) => {

    const host = 'http://localhost:2077'

    const blogInital = []
    const [blog, setBlog] = useState(blogInital)

    // Get blogs 
    const getBlogs = async () => {
        const url = host + '/api/blogs/fetch'
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()
        console.log(json)
        setBlog(json)
    }
    // Create a new blog
    const createBlog = async (title, description, img, date) => {
        const url = host + '/api/blogs/create'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, description, img, date })
        })
        const newBlog = await response.json()
        console.log(newBlog)
        setBlog(blog.concat(newBlog))
    }


    return (
        <BlogContext.Provider value={{ blog, getBlogs, createBlog }} >
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState
