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
