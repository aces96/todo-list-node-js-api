const connection = require("../../backend/class/connection")

class Task{
    getAll = ()=>{
        sql = "SELECT * FROM tasks"
        let getAll = connection.query(sql,(err,result)=>{
            if(err){
                throw err
            }
            console.log(result)
        })
        return getAll
    }

    create = (name,description,prioritie)=>{
        sql = `INSERT INTO tasks VALUES("${name}","${description}","${prioritie}")`
        let create = connection.query(sql,(err,result)=>{
            if(err){
                throw err
            }
            console.log(result)
        })

        return create 
    }


    update = (id, key, value)=>{
        sql = `UPDATE tasks SET ${key} = "${value}" WHERE id = "${id}"`
        let update = connection.query(sql,(err,result)=>{
            if(err){
                throw err
            }
            console.log(result)
        })
        return update
    }


    delete = (id)=>{
        sql = `DELETE FROM tasks WHERE id = "${id}"`

        let deleteTask = connection.query(sql,(err,result)=>{
            if(err){
                throw err
            }

            console.log(result)
        })

        return deleteTask

    }





}


module.exports = Task