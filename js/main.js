document.write("<section><h1 style='color:red;'>Hello</h1></section>");
var x = 100;
{
    var y = 200;
    {
        var sum = x + y;
    }
}
function sumDate(data){
    return x+y+sum+data;
}

console.log(sumDate(400))

let num01 = 100;
{
    let num02 = 200;
    console.log(num01 + num02);
}
console.log("num01 is: " + num01);
//console.log("num02 is: " + num02);

var firstName = "Fatemeh"
var lastName = "Madihi"
console.log("My first name is: " + firstName + " and My last name is: " + lastName);

console.log(`My first name is: ${firstName} and My last name is: ${lastName} `);

let MyFirstname = prompt("Enter your firstname","empty");
let Mylastname = prompt("Enter your lastname","empty");
console.log(`Your first name is ${MyFirstname} and your last name is ${Mylastname}`);


var x = 10;
var y = 11;
var result = ++x+y++;
console.log(`result is: ${result}`);
console.log(`y is: ${y}`);
var x = 10;
var y = "10";
let result0 = x===y;
let res = x == y;
console.log(result0);
console.log(res);

var x = 10;
var y = 20;
var resault02 = x>y ? "Yes X more than Y" : "No Y more than X";
console.log(resault02);
let demo = document.getElementById('demo');
console.log(demo.innerHTML);

let x = 10;
let y = 0;
let result = x / y;
if (!isFinite(result)) {
    console.log("It is not Infinte");
} else {
    console.log(result);
}

if (true) {
    console.log("run anyway");
}

debugger;

let age = parseInt(prompt("enter your age", 0));
if (age >= 18) {
    console.log("go to university");
} else {
    console.log('go to school');
}

let day = parseInt(prompt("enter a number for example : 1,2,3,4,5,6,7,..."));
if (day == 1) {
    console.log("shanbe");
} else if (day == 2) {
    console.log("1shanbe");
} else if (day == 3) {
    console.log("2shanbe");
} else if (day == 4) {
    console.log("3shanbe");
} else if (day == 5) {
    console.log("4shanbe");
} else if (day == 6) {
    console.log("5shanbe");
} else if (day == 7) {
    console.log("jomee");
} else {
    console.log("invalid");
}
let num1 = parseFloat(prompt("please enter first number...", "0"));
let num2 = parseFloat(prompt("please enter second number...", "0"));
let operand = prompt("please enter second operand...", "+");
switch (operand) {
    case '+':
        console.log(`num1+num2= ${num1+num2}`);
        break;
    case '-':
        console.log(`num1-num2= ${num1-num2}`);
        break;
    case '/':
        console.log(`num1/num2= ${num1/num2}`);
        break;
    case '*':
        console.log(`num1*num2= ${num1*num2}`);
        break;
    default:
        console.log("Sorry, You enteres invalue Operand")
}

let username = prompt("please enter username");
if (username === "ali") {
    let password = prompt("please enter password");
    if (password === "123") {
        let email = prompt("please enter email");
        if (email === "ff@f.com") {
            console.log("welcome ali...you can enjoy sign in");
        } else {
            console.log("you are not ali, bad human");
        }
    } else {
        console.log("ali you wrote wrong password!");
    }
} else {
    console.log("please call ali...you are not ali!")
}
let username1 = prompt("please enter username");
let password1 = prompt("please enter password");
let email1 = prompt("please enter email");
if (username1 === "ali" && password1 === "123" && email1 === "ff@f.com") {
    console.log("Welcome ali");
} else {
    console.log("sorry we did not find you")
}

let x = 10;
let y = 15;
let res = x > y ? "Yes, x is more than y" : "No, y is more than x";
console.log(res);
function sumfunc(){
    let value1 = parseFloat(prompt("enter first value"));
    let value2 = parseFloat(prompt("enter second value"));
    let sum = value1 + value2;
    let demo = document.getElementById('demo');
    demo.innerHTML = sum;
}
sumfunc();

function info(fname,lname,age){
    console.log(`Your name is ${fname} and your lastname is ${lname} and your age is ${age}`);
}
info('Fatemeh','Madihi',31)

let continuee = confirm("do you want continue?");
if(continuee == true){
    
}

function check(e) {
    if (e == 1) {
        return true;
    } else {
        return false;
    }
}
let check_value = check(1);
console.log(check_value);

for (let i = 0; i < 1000; i++) {
    document.write(`<h1>${i} Hello</h1>`)
}
