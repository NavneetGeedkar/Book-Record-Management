const express = require("express")
const dotenv = require("dotenv")

const DbConnection = require("./databaseConnection")

const usersRouter = require("./routes/users")
const booksRouter = require("./routes/books")


dotenv.config()
const app = express()

DbConnection()

const port = 8081

app.use(express.json())

app.get("/" , (req,res) => {
    res.status(200).json({
        msg : "Server is up and running ",
    })
})

app.use("/users" , usersRouter)
app.use("/books" , booksRouter)


//Get Method : page not Found
app.get("*" , (req,res) =>{
    res.status(404).json({
        msg: "Page Not Found"
    })
})
 
app.listen(port , () =>{
    console.log(`server is running at port ${port}`)
})