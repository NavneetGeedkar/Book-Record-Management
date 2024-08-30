const express = require("express")

const {books}  = require("../data/books.json")
const {users} = require("../data/users.json")

const {
    getAllBooks,
    getSingleBookById,
    getAllIssuedBooks,
    addNewBook,
    updateBookById,
    getSingleBookByName,
} = require("../controllers/book-controller")

const router = express.Router()

//Get Method : get all Books /Books
router.get("/", getAllBooks)

//Get Method : Get Book (single) by ID
router.get ("/:id" ,getSingleBookById)

router.get("/getname/name/:name", getSingleBookByName)

//GET Method : Get All Issued Books
router.get("/issued/by-user", getAllIssuedBooks)

//Post Method : Add New Book
router.post("/", addNewBook)

//PUt Method: UpdateBook by Id
router.put("/:id", updateBookById);

module.exports = router

