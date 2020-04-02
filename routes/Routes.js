const Route= require("express").Router()
const {getindexHtml,getAllStudents,FindStudentById,updateStudentPatch,updateStudentPut,deleteStudent} =require("../Controller/studentController")
const Students= require("../Modals/students")

//routes in express
//get routes
Route.get("/",getindexHtml )
Route.get("/getallstudents",getAllStudents )
//get single Student
Route.get("/student/:id",FindStudentById)


//query route

Route.get("/search",(req,res)=>{
    console.log(req.query)
    let student= Students.find(({age})=>age===parseInt(req.query.age))
    res.json(student)
})

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
Route.patch("/update/:name", updateStudentPatch)

Route.put("/update/:id", updateStudentPut)


//delete any student in array ...Delete method

Route.delete("/delete/:id",deleteStudent)



module.exports=Route