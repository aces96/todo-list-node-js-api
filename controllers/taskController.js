const Task = require("./models/taskModal")
const qs = require("query-string")




let getTask =  (req,res) => {
        let getAll = new Task
        allProj = getAll.getAll()
        res.writeHead(200,{ 'Content-Type': 'application/json' })
        res.end(allProj)
        
        
    
}

let createTask = (req,res)=>{
        let body = ''
        var project
        req.on('data',(chunk)=>{
            body += chunk
        }).on('end',()=>{
            project = qs.parse(body);
            let name = project.name
            let description = project.description
            console.log(description)
            let proj = new Task
            
            createProje = proj.create(name,description)
            res.writeHead(200,{ 'Content-Type': 'application/json' })
            res.end()
        })
        
    
}


let updateTask = (req,res)=>{

        let proj = new Task
        updateProje = proj.update(id,key,value)
        res.writeHead(200,{ 'Content-Type': 'application/json' })
        res.end(updateProje)
        
    
}


let deleteTask = (req,res)=>{
        let proj = new Task
        deleteProje = proj.delete(id)
        res.writeHead(200,{ 'Content-Type': 'application/json' })
        res.end(deleteProje)
        
        
    
}


module.exports = {
    getTask,
    createTask,
    updateTask,
    deleteTask
}