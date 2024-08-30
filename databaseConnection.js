const { default: mongoose } = require("mongoose")
const { use } = require("./routes/users")

const moongoose = ("mongoose")

function DbConnection(){
    const DB_URL = process.env.URL

    mongoose.connect(DB_URL)
    .then( () => {
     console.log("Connection to MongoDB Successful")
    })
    .catch( () => {
     console.log("Error in Connection to MongoDB")
    })   
}

module.exports = DbConnection;