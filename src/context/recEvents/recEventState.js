import React, { useState } from 'react'
import RecEventContext from "./recEventContext";

const RecEventState = (props) => {

    const host = "http://localhost:2077"

    const recEventInitial = []

    const [recEvent, setRecEvent] = useState(recEventInitial)

    // Get recent Event
    const getEvent = async (title, img, date) => {
        const url = host + "/api/resEvent/fetch"
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()
        setRecEvent(json)
    }

    // Create Event
    const addEvent = async (title, img, date) => {
        // Api calls

        const url = host + "/api/resEvent/create"
        const response = await fetch(url, { // fail to fetch
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, img, date })
        })
        const event = await response.json()
        setRecEvent(recEvent.concat(event))
    }

    return (
        <RecEventContext.Provider value={{ recEvent, getEvent, addEvent }} >
            {props.children}
        </RecEventContext.Provider>
    )

}

export default RecEventState