// console.log("Node js tutorial");
// console.log("This is nodejs");
// process.exitCode=1
// process.exit(0)

// const _=require("lodash");
// const arr=[1,4,6,8]
// console.log(_.last(arr));

// const cowsay = require("cowsay");

// console.log(cowsay.say({
//   text: "Hello, I am learning Node.js!",
//   e: "oO",   // Eyes of the cow (you can customize the eyes)
//   T: "U "    // Tongue of the cow (you can customize the tongue)
// }));

const {tesla,ford}=require("./car")
console.log(JSON.stringify(tesla,null,2))
console.log(JSON.stringify(ford,undefined,2));