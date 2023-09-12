import React, { useContext, useState } from 'react'
import RecEventContext from '../context/recEvents/recEventContext'

const AddData = () => {

    const recEventContext = useContext(RecEventContext)

    const { addEvent } = recEventContext

    const [recEvent, setRecEvent] = useState({
        title: '',
        img: '',
        date: ''
    })

    const handleAdd = (e) => {
        e.preventDefault()
        addEvent(recEvent.title, recEvent.img, recEvent.date)
        setRecEvent({
            title: '',
            img: '',
            date: ''
        })
    }

    const handleChange = (e) => {
        setRecEvent({ ...recEvent, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form className="container my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><h4>Title</h4></label>
                    <input type="text" className="form-control" name='title' id="title" value={recEvent.title} onChange={handleChange} minLength={3} required />
                    {recEvent.title.length < 3 && <p className="my-1">*Title must be atleast 3 character.</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label"><h4>Date</h4></label>
                    <input type="text" className="form-control" name='date' id="date" value={recEvent.date} onChange={handleChange} required />
                    {recEvent.date === '' && <p className="my-1">*Please add the date</p>}
                </div>
                <div class="mb-3">
                    <label htmlFor="img" className="form-label"><h4>Add Event Image</h4></label>
                    <input className="form-control" type="file" name='img' id="img" value={recEvent.img} onChange={handleChange} required />
                    {!recEvent.img && <p className="my-1">*Please add the date</p>}
                </div>
                <button disabled={recEvent.title.length < 3 || recEvent.date === '' || !recEvent.img} className="btn btn-primary" type="submit" onClick={handleAdd} >Add Recent Event</button>
            </form>
        </>
    )
}

export default AddData
