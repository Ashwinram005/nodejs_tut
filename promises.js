// const promise=new Promise((resolve,reject)=>{
//     console.log("Asyn Task Execution")
//     // throw "error"
//     if(true){
//         const person={name:"Ashwinram M"}
//         resolve(person)
//     }
//     else{
//         const error={errCode:"1001"}
//         reject(error)
//     }
// })

// promise.then(
//  (val)=>{
//     console.log(val)
//  }
// ).catch(
//     (err)=>{
//         console.log(err)
//     }
// )
// .finally(
//     ()=>{
//         console.log("Finally")
//     }
// )

// let p=Promise.resolve("Execution is done");
// // let p=Promise.reject("Execution is rejected");
// p.then((val)=>{
//     console.log("val")
// })

// function asyncTask(cb){
//     return Promise.resolve()
// }

// asyncTask().then(()=>console.log(name));
// const name="Ashwinram M";

// const p=Promise.resolve("done")
// const p=Promise.reject("failed")
// p.then((val)=>{
//     console.log(val)
//     return "done2"
// }).then((val)=>{
//     console.log(val)
//     return "done3"
// }).then((val)=>{
//     console.log(val)
// })
// .catch((val)=>{
//     console.log(val)
// })

const makeApiCall=(time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This Api executed in: "+time);
        },time)
    })
}

// makeApiCall(1000).then((val) => {
//     console.log(val)
// }).catch((err) => {
//     console.log(err)
// });;

let multiApiCall=[makeApiCall(1000),makeApiCall(2000),makeApiCall(500)]

Promise.all(multiApiCall).then((values)=>{
    console.log(values)
})

Promise.race(multiApiCall).then((value)=>{
    console.log(value)
})