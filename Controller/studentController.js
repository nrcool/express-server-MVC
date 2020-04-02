const Students= require("../Modals/students")
const path=require("path")
const db= require("../Modals/database")


const getindexHtml=(req, res) => {
        res.sendFile(path.resolve(__dirname ,"../build/index.html") )
    }

 const getAllStudents=(req, res) => {
     //get all students data from low db
        let allStudents = db.get("Students").value()
        res.json(allStudents)
    }

const FindStudentById=(req,res)=>{
    console.log("from server.......",req.params.id)
    //get each student by id in lowdb

    let studentById=db.get("Students").find({id:parseInt(req.params.id)}).value()

/*     let user= Students.find((student)=>student.id==req.params.id) */
    res.json(studentById)
}

const updateStudentPatch=(req, res) => {
    console.log(req.params.name)
    let user = Students.find((user) => user.name === req.params.name)
    user.age = user.age + 1
    res.json(Students)
}
const updateStudentPut=(req, res) => {
    console.log(req.params)
    console.log(req.body)
    res.send("okay")
}
const deleteStudent=(req,res)=>{
    console.log(req.params)
    res.send("student deleted")
}

module.exports={getindexHtml,getAllStudents,FindStudentById,updateStudentPatch,updateStudentPut,deleteStudent}
