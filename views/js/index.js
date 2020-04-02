let form = document.querySelector("form")

let name= document.getElementById("name")
let userclass= document.getElementById("class")
let age= document.getElementById("age")

form.addEventListener("submit",function(e){
  e.preventDefault() 
    let obj={
        name:name.value,
        class:userclass.value,
        age:age.value
    }
    let json= JSON.stringify(obj)
    fetch("/addstudent",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:json
    }).then(res=>{
        if(res==="ok"){
            form.reset()
        }

    })
})