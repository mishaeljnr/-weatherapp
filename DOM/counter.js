// const incE1 = document.querySelector(".btn-inc");
// const displayE1 = document.querySelector("#display");

// let count = 0
// incE1.addEventListener('click',function() {

// displayE1.textContent = count++


// })

// const decE1 = document.querySelector("#btn-dec");

// decE1.addEventListener('click',function(){
//     displayE1.textContent = count--
//     if(count<=0 ())
// })

// const resetE1 =  document.querySelector('click',function(){
//     displayE1.textContent = 0;
// })

fetch("https://jsonplaceholder.typicode.com/posts")
.then((Res) => resetE1.json())
.then((data) => {
    for(let dat of data){
        // console.log(dat.title)
        const liE1 = document.createElement('li');
        liE1.textcontent = dat.title;
        document.body.appendChild(liE1s)
    }
});







