const express = require('express')
const { body, validationResult } = require('express-validator')

const Blogs = require('../models/Blogs')
const router = express.Router()

// create a blog

router.post('/create', [
    body('title', "Minimum 5 character should be there in title").isLength(5),
    body('description', "Description should be 25 characters").isLength(25)
], (req, res) => {

    const result = validationResult(req)

    if (!result.isEmpty()) {
        res.send(result.array())
    }

    else {
        try {
            const blog = Blogs(req.body)
            blog.save()
            res.send(blog)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error")
        }
    }
})

// Fetching last 4 blogs

router.get('/fetch', async (req, res) => {
    try {
        const blog = await Blogs.find().sort({_id: -1}).limit(4)
        res.json(blog)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router