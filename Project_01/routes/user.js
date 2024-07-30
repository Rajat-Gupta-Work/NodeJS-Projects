const express = require('express')
const{ 
    handleGetAllUsers,
    handleCreateNewUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
 } = require("../controllers/user")

const router = express.Router()

/*router.get("/users", async (req, res) => {
    const allDbUsers = await User.find({})
    const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul
    `;
    res.send(html)
})*/

//Rest API
router
    .route("/")
        .get(handleGetAllUsers)
        .post(handleCreateNewUser)

router
    .route("/:id")
        .get(handleGetUserById)
        .patch(handleUpdateUserById)
        .delete(handleDeleteUserById)


//POST ROUTE => /api/users
//const body = req.body
//    users.push({ ...body, id: users.length + 1 })
//    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),  (err, data) => {
//        return res.json({ status: "success", id: users.length }) 

module.exports = router