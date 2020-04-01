const Route= require("express").Router()
const {getindexHtml,getAllStudents,FindStudentById} =require("../Controller/studentController")
const Students= require("../Modals/students")
console.log(Students)
//routes in express
//get routes
Route.get("/",getindexHtml )
Route.get("/getallstudents",getAllStudents )
//get single Student
Route.get("/:id",FindStudentById)

//creating post Routes

Route.post("/", (req, res) => {

    res.send("this is a post Route")
})
Route.post("/addstudent", (req, res) => {
    console.log(req.body)

    Students.push(req.body)

    res.send("ok")
})


//update we can use put/patch
Route.patch("/update/:name", (req, res) => {
    console.log(req.params.name)
    let user = Students.find((user) => user.name === req.params.name)
    user.age = user.age + 1
    res.json(Students)
})

Route.put("/update/:id", (req, res) => {
    console.log(req.params)
    console.log(req.body)
    res.send("okay")
})


//delete any student in array ...Delete method

Route.delete("/delete/:id",(req,res)=>{
    console.log(req.params)
    res.send("student deleted")
})



module.exports=Route