// Error object
// const error =new Error("Something went wrong");
// console.log(error.stack);
// console.log(error.message);
// throw new Error("Im error object")

const CustomError = require("./CustomError"); // Ensure this matches the actual file name
// throw new CustomError("Something went wrong");

//Handling error using try and catch
// try {
//     dosomething()
// }
// catch (error) {
//    console.log("Error occurred");
//    console.log(error);
// }

function dosomething(){
    // console.log("I am from do function")
    // return "I am from do function"
    const data=fetch("localhost:3000/api")
}

//uncaught exception
// process.on("uncaughtException",()=>{
//     console.log("Uncaught exception occurred");
//     process.exit(1);
// })

// dosomething();

//Exception with Promises
//  const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve(dosomething());
//     }
//     else{
//         reject(dosomething());
//     }
//  })

//  promise.then((val)=>{
//     console.log(val);
//  })
//  .catch((error)=>{
//     console.log("Error Occured");
//     console.log(error);
//  })

//Exception with Asyn and await
const someFunction=async()=>{
    try{
        await dosomething();
    }
    catch(error){
        throw new CustomError(error.message);
    }
}
someFunction();