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

// const {tesla,ford}=require("./car")
// console.log(JSON.stringify(tesla,null,2))
// console.log(JSON.stringify(ford,undefined,2));

const path=require("path");
const filePath=path.join(__dirname,"files","sample.txt");
// //dirname
// console.log(path.dirname(filePath));
// console.log(__dirname)
// //basename
// console.log(path.basename(filePath));
// console.log(__filename)
// //extension
// console.log(path.extname(filePath));

const fs=require("fs")
const fsPromises=require("fs").promises
// // Reading from a file-async
// fs.readFile(filePath,"utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

// //Reading from a file-sync
// try {
//     const data=fs.readFileSync(filePath,"utf-8");
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// const fileReading=async()=>{
//     try {
//         const data=await fsPromises.readFile(filePath,"utf-8");
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fileReading()

//writing into file
const txtfile=path.join(__dirname,"files","text.txt")
// const content="I am developer";
// fs.writeFile(txtfile,content,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Writed successfully");
//     fs.readFile(txtfile,"utf-8",(err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log(data);
//     })
// })

const writingInFile=async()=>{
    try {
        await fsPromises.writeFile(txtfile,"Hello",{
            flag:"a+"
        });
        // await fsPromises.appendFile(txtfile,"\nWelcome");
        await fsPromises.rename(txtfile,path.join(__dirname,"files","newtxt.txt"));
        const data=await fsPromises.readFile(path.join(__dirname,"files","newtxt.txt"),"utf-8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
writingInFile()