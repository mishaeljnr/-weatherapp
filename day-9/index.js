//higher order funcion 

function multiplyby2(n) {
    return n * 2
}

// console.log(multiplyby2(3))

function cube(multiplyby2, num) {

     return multiplyby2(num) * num

}

console.log(cube(multiplyby2, 3));

//map, filter, reduce ,foreach

const numbers = [1, 2, 3, 4, 5];

const mappedArr = numbers.map((n) => n * 2)

console.log(mappedArr)

numbers.forEach((num)=> {
    console.log(num * 2)
})

// console.log(dop)
const fruits = ['banana', 'orange', 'mango', 'lemon'] 

const fruitsmapped = fruits.map((fruit)=>fruit.toUpperCase())

console.log(fruitsmapped)

// const filterfruit = fruits.filter((fruit)=> fruit.length > 5)
// const filterfruit = fruits.filter((fruit)=> fruit.length => friut.includes("b"));
console.log(filterfruit)

const reducearr = numbers.reduce((prev,cur) => prev + cur,0)
console.log(reducearr)

// function call() {
//     console.log("emergency!!!");
// }

// //set time out and set interval

// setInterval(()=> {
//     call()
// },5000)


// setTimeout

setTimeout(()=>{
    console.log("timeout!!!")
}, 5000)



