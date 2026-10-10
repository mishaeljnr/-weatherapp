// const firstNameE1 = document.getElementsByTagName
// ('input')[0]

// const firstNameE1 = document.getElementById
// ("firstname").value;
const firstname = document.querySelector
("#firstname");

console.log(firstNameE1)

firstNameE1.addEventlistener('change',() => {
    console.log(firstNameE1.value)
})