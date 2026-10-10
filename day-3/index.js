let benchAge = 18;
let age = 15;

console.log(age > benchAge)

let isStudent = true;
let ismarried = false;
let isRaining = false;
let isLighton = true;
let numone = 1;
let numtwo = 5;
let payment;
let status = null
console.log(numone === numtwo)
console.log(payment)

// let x = 8
// let y = 5;
// let sum = 0;

// sum += x // sum=sum+x
// sum -= y


// let numOne = 4
// let numTwo = 3
// let sum = numOne + numTwo
// let diff = numOne - numTwo
// let mult = numOne * numTwo
// let div = numOne / numTwo
// let remainder = numOne % numTwo
// let powerOf = numOne ** numTwo
// console.log(remainder);
// console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

// console.log(4<5)
// console.log(5>4)
// console.log(6<=5)
// console.log(6!==6)

// let screensize = 569
// let resolution1 = High;
// let resolution2 = low;
// let resolution3 = std;

// if(screensize > 569) {
//     screensize = resolution1
// }else if(screensize > 569){
//     screensize = resolution2
// } else if(screensize === 569){
//     screensize = resolution3
// } else{
//     console.log("your device screen is not supported")
// }

// const check1 = 4 > 3 && 10 > 5;      // true && true -> true
// const check2 = 4 > 3 && 10 < 5  ;       // true && false -> false
// const check3 = 4 < 3 && 10 < 5 ; 

let val = 6
let kounter = ++val
// console.log(kounter)
// console.log(val)


kounter = val--;

console.log(kounter);
console.log(val);
// date Object

console.log(now)
console.log(now.getfullyear())
console.log(now.gettime())
console.log(now.getday()+1)
console.log(now.gethours())
console.log(now.getmonth()+1)

//dd / mm/ yy :h:m:s

let yy = now.getfullyear()
let mm = now.getmonth()+1
let day = now.getday()+1
let hrs = now.gethours()
let mins = now.getminutes()
let secs = now.getseconds()

console.log('$'{day}/${mm}/${yy} : ${hrs}:${mins}:${secs})