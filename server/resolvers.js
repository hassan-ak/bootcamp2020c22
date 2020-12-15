let crypto = require('crypto')
let localData = {}

const resolvers = {
    Query : {
        getMessage : ()=>{
            return "Hello World!"
        },
        getName : ()=>{
            return "Hassan ali Khan"
        }
    },
    Mutation : {
        createMessage : (_,{input})=>{
            let id = crypto.randomBytes(10).toString("hex")
            console.log("id" , id)
            localData[id] = {id, ...input.message}
            return {id, ...input}
        }
        
    }
}

module.exports =  resolvers;