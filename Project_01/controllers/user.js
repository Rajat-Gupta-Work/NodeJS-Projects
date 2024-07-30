const { model } = require("mongoose")
const User = require("../models/user")

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({})
    console.log("i am in get route", req.myUserName)
    //Request Header
    console.log(req.headers)
    // Response header
    res.setHeader("X-MyName", "Rajat")
    // always Add X to Custom Header - best practice
    return res.json(allDbUsers)
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    if (
        !body || 
        !body.first_name || 
        !body.last_name || 
        !body.email || 
        !body.gender || 
        !body.job_title) {
        return res.status(400).json({ msg: 'All fields are required.' });
    }
    
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    })

    return res.status(201).json({ msg: "success" , id: result._id })
}

async function handleGetUserById(req,res) {
    const user = await User.findById(req.params.id)
    //const id = Number(req.params.id);
    //const user = users.find((user) => user.id === id)
    if (!user) return res.status(404).json({ error: 'user not found' })
    return res.json(user)
}

async function handleUpdateUserById(req,res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" })
    return res.json({ status: "Success" })
}

async function handleDeleteUserById(req,res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Success" })
}

module.exports = {
    handleGetAllUsers,
    handleCreateNewUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
}