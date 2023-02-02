//use this to create a new async file 


const {readFile, writeFile} = require('fs');
const { ReadableStreamDefaultController } = require('stream/web');
console.log('start')
readFile('./content/first.txt', 'utf8',(err,result) => {

    if(err){
        console.log(err)
        return
    }
const first= result;
readFile('./content/second.txt', 'utf8', (err,result) => {
    if (err){
        console.log(err)
        return
    }
    const second = result
    writeFile('./content/result-async.txt', `here is the result : ${first} , ${second}`, (err,result)=>{

        if(err){
            console.log(err)
            return
        }
        console.log('done w this task')
    })
})
})
console.log('done and starting next task')