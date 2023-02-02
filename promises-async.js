const { LOADIPHLPAPI } = require('dns');
const {readFile , writeFile} = require('fs').promises
//commented out below to just use the one atop ^ had to make changes to readfilepromise and write file promise
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const { result, get } = require('lodash');


// const getText = (path) =>{

//     return new Promise((resolve,reject)=>{
//     readFile(path, 'utf8' , (err,data) => {

//         if (err){
    
//             reject(err);
//             return
//         }else{
//             resolve(data);
//         }
//     })}
    
//     )
// }


// getText('./content/first.txt').then(result=> console.log(result))
// .catch((err)=> console.log(err))

const start = async() =>{
try{
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile ('./content/second.txt', 'utf8')
    await writeFile('./content/result-mind-grenade.txt', `this is mind greeeee : ${first} ${second}`)
    console.log(first,second);
}
    catch(error){
    console.log(error)};
}
start()