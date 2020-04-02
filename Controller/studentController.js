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
const getorders=(req,res)=>{
    let orders= db.get("Orders").value()
    res.json(orders)
}
const FindStudentById=(req,res)=>{
    console.log("from server.......",req.params.id)
    //get each student by id in lowdb

    let studentById=db.get("Students").find({id:parseInt(req.params.id)}).value()

/*     let user= Students.find((student)=>student.id==req.params.id) */
    res.json(studentById)
}


//post route for add student
const addStudent=(req, res) => {
    console.log(req.body)

 /*    Students.push(req.body) */
 //add student in low db

 db.get("Students").push(req.body).write()

 let allstudents=db.get("Students").value()
    res.json(allstudents)
}



const updateStudentPatch=(req, res) => {
    console.log(req.params.name)

/*   let user = Students.find((user) => user.name === req.params.name)  */
    let student= db.get("Students").find({name:req.params.name}).value()
    //increment age by 1
    student.age=student.age+1

    //again assign back our student in our database
    db.get("Students").assign(student).write()
    res.json(student)

}

const updateStudentPut=(req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    //find old student in database and replace it with new one
   db.get("Students").find({id:parseInt(req.params.id)}).assign(req.body).write()
    res.send("okay")
}

const deleteStudent=(req,res)=>{
    console.log(req.params.id)
    //delete student from databse by id
    db.get("Students").remove({id:parseInt(req.params.id)}).write()

    res.send("student deleted")
}

module.exports={getindexHtml,getorders,getAllStudents,FindStudentById,addStudent,updateStudentPatch,updateStudentPut,deleteStudent}
