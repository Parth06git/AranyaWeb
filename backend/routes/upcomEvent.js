const express = require('express')
const UpComEvent = require('../models/UpComEvent')
const { body, validationResult } = require('express-validator')
const router = express.Router()

// create a event

router.post('/create', [
    body('title', "Minimum 5 characters should be there in title").isLength(5)
], (req, res) => {

    const result = validationResult(req)

    if (!result.isEmpty()) {
        res.send(result.array())
    }

    else {
        try {
            const event = UpComEvent(req.body)
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
        const event = await UpComEvent.find().sort({ _id: -1 }).limit(2)
        res.json(event)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// Delete the event

router.delete('/delete/:id', async (req, res) => {

    try {
        let event = await UpComEvent.findById(req.params.id)
        if (!event) {
            res.status(404).send("Event Not Found")
        }
        event = await UpComEvent.findByIdAndDelete(req.params.id)
        res.json({ Message: "Successfully Event has been deleted" })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})


module.exports = router