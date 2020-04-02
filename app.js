const express = require("express")
const {mymiddleware} = require("./middleware/middleware")
//create our express server
const app = express()

/* crud operation */
/* create (Post method)
read (Get method)
update (Patch,Put method)
delete (Delete method) */




//telling server to serve all statics files
app.use(express.static("build"))


//importing routes from controller
const Route = require("./routes/Routes")

//using express json method to parse request body
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(mymiddleware)
app.use("/",Route)


//set port for server
const port = process.env.PORT || 3000;


app.listen(port, () => console.log("server started"))





/* Modal (databases)
View (Views/index.html)
Controller   (Controllers/routes) */