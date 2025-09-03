console.log("conditional");

// if statement (condtioin y/n)
// if(condition){
//    code to be executed if the condtion
//}

let result = 30

if(result > 40){
    console.log("You passed the exam");
}

let result1 = 45;
let result2 = 45;

if(result1==result2){
    console.log("The values are the same!");
}

if(result > 40){
    console.log("You passed the exam");
}else{
    console.log("You did not passed the exam");
}
let waterTemp = 105;

if(waterTemp >= 100){
    console.log(" The water is boiling");
}else{
    console.log("The water is NOT boiling")

}

// else if statement
// if(condition){ 
//     code to be exceucted if the condition is true
// }else if(condition2){
//    code to be exccecuted if the conditions are true

//}else{
 // code to be executed if the condition is false   
//}

function ageCalculator(){
    let age = prompt ("Enter the age");
    
    if(age < 13){
        console.log("You are a child");
    }else if(age < 21){
        console.log("you are a teenager");
    }else if(age < 64){
        console.log(" You are and adult");
    }else{
        console.log("You are an senior");
    }
}
function trafficLight(){
    let light = ("Preform action");

    if(light = "green"){
        console.log("Car will go");
    }else if(light = "yellow"){
        console.log("Car will slow down");
    }else{
        console.log("Car will stop")
    }
}


