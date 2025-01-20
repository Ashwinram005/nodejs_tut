// console.log("Task start");
// function asyncTask(cb){
//     console.log("Task running")
//     setTimeout(cb,0);
// }

// asyncTask(()=>console.log(name));
// console.log("Task end");
// const name="Ashwinram M";

// function asyncTask(cb){
//     setTimeout(()=>{
//         cb(null,"This is data from server");
//     });
// }

// asyncTask((err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("data",data);
// })

function asyncTask(cb){
    setTimeout(()=>{
        cb(null,"This is data from server");
    });
}

function makeApiCall(cb){
    setTimeout(()=>{
        console.log("This is Async task execution")
    },0);
}

makeApiCall(()=>{
    makeApiCall(()=>{
        asyncTask(()=>{
            asyncTask(()=>{
                asyncTask(()=>{
                    asyncTask(()=>{})
                })
            })
        })
    })
})
