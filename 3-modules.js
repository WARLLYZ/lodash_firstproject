const amount = 12

if (amount < 10){

    console.log("small number")
}
else{
    console.log("larger number")
}
console.log("this is my first node app")

//path to current directory
console.log(__dirname)
setInterval(() =>{

    console.log("helloooooo intervalll")
}, 3000)

//modules

const names = require('./4-names');
const sayHi = require('./5-utils');
//you can see in log that they are onject when we console log em'
console.log(names);

//alt way to export

const data = require('./6-altexport')

console.log(data)
//mind grenande 

require('./7-mind-grenade')
//names moved to names.js and funct moved to utils.js

sayHi(names.john)
sayHi(names.peter)
sayHi('susan')