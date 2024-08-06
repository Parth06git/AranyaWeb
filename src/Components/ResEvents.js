import React, { useContext, useEffect } from 'react'
import recEventContext from '../context/recEvents/recEventContext'
import Events from './Events'


const ResEvents = () => {

    const context = useContext(recEventContext)
    const { recEvent, getEvent } = context

    useEffect(() => {
        getEvent()
    })

    return (
        <>
            <div className="container my-5">
                <div className='row my-3'>
                    <h2 className="text-center">Recent Treks and Events</h2>
                    <div className="container mx -1">
                        {recEvent.length === 0 && 'No Notes to Display'}
                    </div>
                    {recEvent.map((recEvent) => {

                        return <Events recEvents={recEvent} key={recEvent._id} />

                    })}

                </div>
            </div>
        </>
    )
}

export default ResEvents
