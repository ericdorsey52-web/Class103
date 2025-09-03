console.log("function.js")

// 1. function declaration 
function sayHello(){
    // nody of the function
    console.log("Hello Cohort 61");
}

// 2. call/trigger/
sayHello()
sayHello()

// Example 2 with 1 parameter
function greet(name){
    console.log("Hello " + name);
}

greet("Jeuan");
greet("Pam");
greet("Brant");

// Example 3 with 2 parameters
function greet2(fname,lname){
    console.log("Welcome to the system " + fname + " " + lname);
}

greet2("Eric","Dorsey");

// challenge 1: Double the Number
// task
// create a function called doubleNumber that take one number as a parameter
// the function should display the number multiplied by 2
// print the result when you call the function 3 different numbers

function doubleNumber(num1){
    console.log(num1* 2)
}

doubleNumber("2")
doubleNumber("4")
doubleNumber("6")

// eXAMPLE 4 WIRH THE PROMPT 

//prompt("Enter your name: ")
//alert("this is an alert")

function welcom(){
    let name = prompt("Enter your name");

    console.log("welcome " + name)
}

// run from the console (welcome() + enter)

// EX 5 with defualt parameters
function add(num1=0,num2=0){
    let total = num1 + num2;
    console.log("The total is: " + total);
}

add()//13
add(5)//13
add(5,8)//13

//challenge 2 
function combineNames (firstName="unknown",lastName="unknown"){
    console.log(`${firstName} ${lastName}`)
}

combineNames("Alice","Johnson");// Alice Johnson
combineNames("Alice",);// Alice unknown
combineNames();// unknown unknown

 //challenge 3

 function convertToseconds1 (minutes=0){
    let seconds = minutes*60;

    console.log(`${minutes} mintues are ${Seconds}s`);
 }

  function convertTosecond2 (minutes=0){
    let mins = prompt("Enter the mins");
    let sec = mins*60;

    console.log(`${mins} mint are ${sec}s`);
  }
  function convertToseconds(){
    let mins = Number(prompt("Enter the mins"));
    let sec = mins*60;
    document.getElementById("results").innerHTML+=`<li class="conv"> ${mins} mins are ${sec}s </li>`;
  }