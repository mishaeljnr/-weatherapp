// function addNum(a, b){
//     console.log(a + b)
// }

// addNum(1,4)
// addNum(100,6000)

// const printNum = function(){
    
// }

//write a function to welcome each student to the class

// function greetings(name){
//     return 'welcome to the class,${name}!'
// }

// console.log(greetings("peace"));
// console.log(greetings("john"));
// console.log(greetings("mary"));
//num1 + num2

const sum = function(num1,num2) {
    return num1 + num2;

}

console.log(sum(5,10));
console.log(sum(50,90));


// num1 operand
//+ - * opcode

const calculator =(num1,num2,opcode)=>{
    // return '${num1} +${num2}:${num1 opcode num2}'
    if (opcode === "+") {
        return num1 +num2
    }else if (opcode==="-") {
        return num2 - num1
    }else if(opcode ==="*"){
        return num1 * num2
    }else if(opcode ==="/") {
        return num1/num2
    }else{'invalid operation code'}

}

console.log(calculator(5,6,"+"))
console.log(calculator(5,6,"-"));

const countries = ["Nigeria","Ghana","Togo"]
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] 

//functions that take an array


function acceptarr(arr) {
    for (let i = 0; i < arr.length; i++){
   console.log(arr[i].toUpperCase())
  }
}

acceptarr(countries)
acceptarr(webTechs)

for(let n =1; n<=50; n++){
  console.log(n)
}

const printNum = (num) =>{
    for(let i = 1; i<= num; i++){
        console.log (i)
    }
}

// printNum(50)

function turnArrtoUpperCase(arr) {
    newarr.push(arr[i].toUpperCase())
}

return newarr