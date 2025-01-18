// const x="1";
// const y="2";
// console.log(x,y);

// %s format variable to string
// %d format variable to number
// %i format variable to integer
// %o format variable to object

// console.log("Im %s and my age is %d","ASHWINRAM M",19);
// console.clear()
// console.count("I am ASHWINRAM M");
// console.count("I am ASHWINRAM M");
// console.count("I am 19");
// console.countReset("I am ASHWINRAM M");
// console.count("I am ASHWINRAM M");

// const function1=()=>console.trace();
// const function2=()=>function1();
// function2();

// const sum=()=>console.log(`The sum of 2 and 3 is : ${2+3}`)
// const mul=()=>console.log(`The product of 2 and 3 is : ${2*3}`)
// const measureTime=()=>{
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");
//     console.time("mul()");
//     mul();
//     console.timeEnd("mul()");
// }

// measureTime()

const progressBar=require('progress');
const chalk=require('chalk');
const bar=new progressBar("downloading [:bar] :rate/bps :percent :etas",{
    total:20
});

const timer=setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100)

console.log(chalk.green("This is node js"));