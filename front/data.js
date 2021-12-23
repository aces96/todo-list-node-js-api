const { default: axios } = require("axios")

let data = ()=>{
    axios.get('api/projects',(resolve,reject))
}