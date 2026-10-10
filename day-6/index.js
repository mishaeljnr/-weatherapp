// //loop 1 - 50 using for-loop


// for (let k = 1; k<= 50; k++){

//     console.log(k)

// }
// //50-1

// for(let k =50; k>=1; k--){
//     console.log(k)
// }


let arr =[1,2,3,4,5]
//0 1 2 3 4 
for( let i = 0; i < arr.length; i++){
    console.log(i)
arr.length}

let fruits = ["orange","banana","apple","vegetables"]

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i].toUpperCase())
}

let emptyArr = [];
for (let i = 0; i < fruits.length; i++){
    // emptyArr[i] = fruits[i].toUpperCase()
    emptyArr.push(fruits[i].toUpperCase())
}

console.log(emptyArr)

for(let fruit of fruits){
    console.log(fruit)
}

const person =[
    {
        name: "doe",
        age:700,
        isstudent:true
    },
    {
        name:"adex",
        age:900,
        isstudent:true
    },
    {
        name:"fola",
        age:"100",
        isstudent:false
    }
]

// console.log(person[0])

for(let p of person){
    console.log(p["isstudent"])
}


//while

let c = 1;

while(c <= 10) {
    console.log(c)

    c++
}

do{
    console.log(c)
    c++
}while(c > 5);