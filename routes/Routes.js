const Route= require("express").Router()
const {getindexHtml,getAllStudents,getorders,FindStudentById,addStudent,updateStudentPatch,updateStudentPut,deleteStudent} =require("../Controller/studentController")
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
Route.get("/orders",getorders)

//creating post Routes

Route.post("/", (req, res) => {

    res.send("this is a post Route")
})
Route.post("/addstudent", addStudent)



//update we can use put/patch
Route.patch("/update/:name", updateStudentPatch)

Route.put("/updatebyid/:id", updateStudentPut)


//delete any student in array ...Delete method

Route.delete("/delete/:id",deleteStudent)



module.exports=Route