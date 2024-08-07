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
console.log("num02 is: " + num02);

var firstName = "Fatemeh"
var lastName = "Madihi"
console.log("My first name is: " + firstName + " and My last name is: " + lastName);

console.log(`My first name is: ${firstName} and My last name is: ${lastName} `);
