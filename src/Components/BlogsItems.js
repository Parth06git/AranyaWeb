import React from 'react'
import about from './img/about.jpg'

const BlogsItems = (props) => {

    const { blogs } = props

    return (
        <>
            <div className="row mt-4 blog_box">
                <div className="col">
                    <img src={blogs.img ? blogs.img : about} className="rounded float-start" alt="Aranya" width="320rem" height="250rem" />
                </div>
                <div className="col">
                    <h1 className="font-weight-bold, font-italic pt-2" >{blogs.title}</h1>
                    <pre>
                        {blogs.description}
                    </pre>
                    <p className="card-title" style={{
                        fontSize: 'small'
                    }} >On {blogs.date}</p>
                </div>
            </div>
            <hr className="featurette-divider" />
        </>
    )
}

export default BlogsItems
