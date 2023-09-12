const express = require('express')
const { body, validationResult } = require('express-validator')
const Members = require('../models/Members')
const router = express.Router()

// Create a member
router.post('/create', [
    body('mail', "Enter a valid Mail I'd").isEmail()
], (req, res) => {

    const result = validationResult(req)
    if (!result.isEmpty()) {
        res.send(result.array())
    }

    else {

        try {
            const member = Members(req.body)
            member.save()
            res.send(member)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error")
        }

    }
})

//  Fetching the co-ordinator
router.get('/fetch/coordinator', async (req, res) => {
    try {
        const cat = "Co-ordinator"
        const coord = await Members.find({ category: cat }).sort({ _id: -1 }).limit(1)
        res.send(coord)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//  Fetching the Co Co-ordinator
router.get('/fetch/cocoordinator', async (req, res) => {
    try {
        const cat = "Co Co-ordinator"
        const coord = await Members.find({ category: cat })
        res.send(coord)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//  Fetching the Core-Member
router.get('/fetch/coremember', async (req, res) => {
    try {
        const cat = "Core-Member"
        const coord = await Members.find({ category: cat })
        res.send(coord)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//  Fetching the Faculty-Advisor
router.get('/fetch/facultyadvisor', async (req, res) => {
    try {
        const cat = "Faculty Advisor"
        const coord = await Members.find({ category: cat }).sort({ _id: -1 }).limit(1)
        res.send(coord)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//  Fetching the Former Co-ordinator
router.get('/fetch/formercoordinator', async (req, res) => {
    try {
        const cat = "Former Co-ordinator"
        const coord = await Members.find({ category: cat }).sort({ _id: -1 }).limit(1)
        res.send(coord)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//  Fetching the Former Faculty Advisor
router.get('/fetch/formerFA', async (req, res) => {
    try {
        const cat = "Former Faculty Advisor"
        const coord = await Members.find({ category: cat }).sort({ _id: -1 }).limit(1)
        res.send(coord)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//  Deleting all the Core-Members
router.delete('/delete/coreMembers', async (req, res) => {
    try {
        const cat = 'Core-Member'
        const coord = await Members.deleteMany({ category: cat })
        res.send("Successfull")
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//  Deleting all the Co-coordinator
router.delete('/delete/cocoordinator', async (req, res) => {
    try {
        const cat = 'Co Co-ordinator'
        const coord = await Members.deleteMany({ category: cat })
        res.send("Successfull")
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router
