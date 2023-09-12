const express = require('express')
const RecEvent = require('../models/RecentEvent')
const { body, validationResult } = require('express-validator')
const router = express.Router()

// Create a Event, Post

router.post('/create', [
    body('title', "Minimum lenght is 5 characters").isLength({ min: 5 })
], (req, res) => {

    const result = validationResult(req)

    if (!result.isEmpty()) {
        res.send(result.array())
    }

    else {
        try {
            const event = RecEvent(req.body)
            event.save()
            res.send(event)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error")
        }
    }

})

// Fetch the event

router.get('/fetch', async (req, res) => {
    try {
        const event = await RecEvent.find().sort({ _id: -1 }).limit(4)
        res.json(event)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// Delete the event

router.delete('/delete/:id', async (req, res) => {

    try {
        let event = await RecEvent.findById(req.params.id)
        if (!event) {
            res.status(404).send("Event Not Found")
        }
        event = await RecEvent.findByIdAndDelete(req.params.id)
        res.json({ Message: "Successfully Event has been deleted" })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})

module.exports = router