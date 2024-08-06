import React, { useContext, useState } from 'react'
import RecEventContext from '../context/recEvents/recEventContext'
import FileBase64 from 'react-file-base64'
import BlogContext from '../context/blogs/blogContext'

const AddData = () => {

    const recEventContext = useContext(RecEventContext)
    const blogContext = useContext(BlogContext)

    const { addEvent } = recEventContext
    const { createBlog } = blogContext

    const [blog, setBlog] = useState({
        title: '',
        description: '',
        img: '',
        date: ''
    })

    const [recEvent, setRecEvent] = useState({
        title: '',
        img: '',
        date: ''
    })

    const handleAddRec = (e) => {
        e.preventDefault()
        addEvent(recEvent.title, recEvent.img, recEvent.date)
        setRecEvent({
            title: '',
            img: '',
            date: ''
        })
    }

    const handleChangeRec = (e) => {
        setRecEvent({ ...recEvent, [e.target.name]: e.target.value })
    }

    const handleAddBlog = (e) => {
        e.preventDefault()
        createBlog(blog.title, blog.description, blog.img, blog.date)
        setBlog({
            title: '',
            description: '',
            img: '',
            date: ''
        })
    }

    const handleChangeBlog = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value })
    }

    return (
        <>
            {/* For the Recent Event Add */}
            <div className="container my-2">
                <h2 className="text-center">Add recent event</h2>
                <form className="container my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label"><h4>Title</h4></label>
                        <input type="text" className="form-control" name='title' id="title" value={recEvent.title} onChange={handleChangeRec} minLength={3} required />
                        {recEvent.title.length < 3 && <p className="my-1">*Title must be atleast 3 character.</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label"><h4>Date</h4></label>
                        <input type="text" className="form-control" name='date' id="date" value={recEvent.date} onChange={handleChangeRec} required />
                        {recEvent.date === '' && <p className="my-1">*Please add the date</p>}
                    </div>
                    <div className="mb-3">
                        <h4>Add Event Image</h4>
                        <FileBase64
                            multiple={false}
                            onDone={({ base64 }) => setRecEvent({ ...recEvent, img: base64 })} />

                        {!recEvent.img && <p className="my-1">*Please add the image</p>}
                    </div>
                    <button disabled={recEvent.title.length < 3 || recEvent.date === '' || !recEvent.img} className="btn btn-primary" type="submit" onClick={handleAddRec} >Add Recent Event</button>
                </form>
            </div>
            <div className="container my-2">
                Make list of rec event
            </div>
            {/* For the Blog add  */}
            <div className="container my-2">
                <h2 className="text-center">Add Blogs</h2>
                <form className="container my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label"><h4>Title</h4></label>
                        <input type="text" className="form-control" name='title' id="title" value={blog.title} onChange={handleChangeBlog} minLength={3} required />
                        {blog.title.length < 3 && <p className="my-1">*Title must be atleast 3 character.</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><h4>Description</h4></label>
                        <textarea className="form-control" name='description' id='description' value={blog.description} rows="5" onChange={handleChangeBlog} required ></textarea>
                        {blog.description.length < 25 && <p className="my-1">*Description must be atleast 25 character.</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label"><h4>Date</h4></label>
                        <input type="text" className="form-control" name='date' id="date" value={blog.date} onChange={handleChangeBlog} required />
                        {blog.date === '' && <p className="my-1">*Please add the date</p>}
                    </div>
                    <div className="mb-3">
                        <h4>Add Event Image</h4>
                        <FileBase64
                            multiple={false}
                            onDone={({ base64 }) => setBlog({ ...blog, img: base64 })} />

                        {!blog.img && <p className="my-1">*Please add the image</p>}
                    </div>
                    <button disabled={blog.title.length < 3 || blog.description.length < 25 || blog.date === '' || !blog.img} className="btn btn-primary" type="submit" onClick={handleAddBlog} >Add a Blog</button>
                </form>
            </div>
        </>
    )
}

export default AddData
