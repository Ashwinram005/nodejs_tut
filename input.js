// const readline=require("readline") 

// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// rl.question("What is your name?",name=>{
//     console.log(`Hi ${name}`);
//     rl.question("How old are you?",age=>{
//         console.log(`You are ${age} years old`);
//         rl.close();
//     })
// })

const prompt=require("prompt-sync")()

const name=prompt("What is your name")
console.log(`Hi ${name}`)