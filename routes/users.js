const express = require("express")
const {
    getAllUsers,
    getSingleUserById,
    deleteUser,
    updateUserById,
    createNewUser,
    getSubscriptionDetailsById
} = require("../controllers/user-controller")
const { users} = require("../data/users.json")

const router = express.Router()

// Get Method : to get all users  /users
router.get( "/" , getAllUsers)

// Get Method: to get single user by id  /users/:id
router.get("/:id" ,getSingleUserById)

// Post Method : create new user  /user
router.post("/", createNewUser)

// PUT Method: updating existing record/user
router.put("/:id" , updateUserById)

// Delete method : Delete a User by ID
router.delete("/:id" , deleteUser)

//Get All Subscription details
router.get("/subscription-details/:id", getSubscriptionDetailsById
    
)

module.exports = router