//syntax

let score = 0;
let grade = ""

// switch statement
switch(true){
    case score>= 70:
        console.log("excellent")
        break;
    case score>= 60:
        console.log("very good");
        break
        case score>= 50:
            console.log("good") ;
            break;
            case score>=45:
                console.log("pass");
                break
                case score>=40:
                    console.log("fair");
                    break;
                    default:
                    console.log("fail")

}
let weather= "sunny"
switch(weather){
    case "sunny":
        console.log("the weather is sunny");
        break
        case "cold":
            console.log("the weather is cold");
            break
            case "raining":
                console.log("the weather is raining");
                break
                default:
                    console.log("invalid weather")
}

// if(score >=70) {
//     // grade = "excellent"//if this failed then else block will run
//     console.log("excellent")

//  } //else{
// //     console.log("your score is less than 70")
// // }

// if(score>=70){
//     console.log("excellent");
// }else if (score>=60){
//     console.log("very good")
// }else if(score>=50){
//     console.log("good")
// }else if(score >=40){
//     console.log("pass")
// }else if(score >=44){
//     console.log("fair")
// }else{
//     console.log("fail")

// }