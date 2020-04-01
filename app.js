const express = require("express")
const {mymiddleware} = require("./middleware/middleware")
//create our express server
const app = express()

//importing routes from controller
const Route = require("./routes/Routes")


//using express json method to parse request body
//middleware
app.use(express.json())
app.use(mymiddleware)
app.use("/",Route)


//set port for server
const port = process.env.PORT || 3000;


app.listen(port, () => console.log("server started"))





/* Modal (databases)
View (Views/index.html)
Controller   (Controllers/routes) */