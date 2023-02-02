const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//bascially added 2 txt files and then made a new text file and have both data inserted into there

writeFileSync('./content/result-sync.txt', `here is the result : ${first }, ${second}`, {flag:'a'})
console.log('done with this task')
console.log('starting the next task')