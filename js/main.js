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
*/
//debugger;
/*
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

