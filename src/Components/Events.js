import React from 'react'
import './Style.css'
import caf from './img/cafeteria.png'

const Events = (props) => {

    const { recEvents } = props

    return (
        <>
            <div className="col mx-5 px-5 py-2">
                <div className="card box" style={{
                    width: '21rem'
                }}>
                    <img src={recEvents.img? recEvents.img : caf} className="card-img-top" alt="..." width="225rem" height="225rem" />
                    <div className="card-body">
                        <h4 className="card-title, text-center">{recEvents.title}</h4>
                        <p className="card-title" style={{
                            fontSize: 'small'
                        }} >On {recEvents.date} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events
