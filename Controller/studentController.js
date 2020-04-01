const Students= require("../Modals/students")
const getindexHtml=(req, res) => {
        res.sendFile(__dirname + "/views/index.html")
    }

 const getAllStudents=(req, res) => {
        res.json(Students)
    }

const FindStudentById=(req,res)=>{
    console.log("from server.......",req.params.id)
    let user= Students.find((student)=>student.id==req.params.id)
    res.json(user)
}
    module.exports={getindexHtml,getAllStudents,FindStudentById}
