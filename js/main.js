  let home = $("section.menu>nav>ul>li:nth-of-type(1)>a").attr("data-id");
  let offsetHome = $(`section${home}`).offset().top;
  $("section.menu>nav>ul>li:nth-of-type(1)>a").on("click", function () {
    $("html").animate(
      {
        scrollTop: offsetHome,
      },1000,"linear");
  });

  let about = $("section.menu>nav>ul>li:nth-of-type(2)>a").attr("data-id");
  let offsetAbout = $(`section${about}`).offset().top;
  $("section.menu>nav>ul>li:nth-of-type(2)>a").on("click", function () {
    $("html").animate(
      {
        scrollTop: offsetAbout,
      },1000,"linear");
  });

  let gallery = $("section.menu>nav>ul>li:nth-of-type(3)>a").attr("data-id");
  let offsetGallery = $(`section${gallery}`).offset().top;
  $("section.menu>nav>ul>li:nth-of-type(3)>a").on("click", function () {
    $("html").animate(
      {
        scrollTop: offsetGallery,
      },1000,"linear");
  });

  let contact = $("section.menu>nav>ul>li:nth-of-type(4)>a").attr("data-id");
  let offsetContact = $(`section${contact}`).offset().top;
  $("section.menu>nav>ul>li:nth-of-type(4)>a").on("click", function () {
    $("html").animate(
      {
        scrollTop: offsetContact,
      },1000,"linear");
  });


$(document).on("scroll", function () {
    let st = $(this).scrollTop();
    console.log(st);
    if(st>500){
        alert("500px")
    }
  });

$(function () {
  let x = $("section.first").offset().top - 100;
  $(document).on("scroll", function () {
    let st = $(this).scrollTop();
    if (st > x) {
      $("section.first>section:nth-of-type(1)")
        .addClass("animate__animated animate__backInLeft")
        .fadeIn(500);
      $("section.first>section:nth-of-type(2)")
        .addClass("animate__animated animate__backInUp")
        .fadeIn(500);
      $("section.first>section:nth-of-type(3)")
        .addClass("animate__animated animate__backInRight")
        .fadeIn(500);
    } 
    else {
      $("section.first>section:nth-of-type(1)")
        .removeClass("animate__animated animate__backInLeft")
        .fadeOut(500);
      $("section.first>section:nth-of-type(2)")
        .removeClass("animate__animated animate__backInUp")
        .fadeOut(500);
      $("section.first>section:nth-of-type(3)")
        .removeClass("animate__animated animate__backInRight")
        .fadeOut(500);
    }
  });
});


let demo = document.getElementById("demo");
let h1 = document.createElement("h1");
h1.innerText = "HELLO";
demo.append(h1);
$(function () {
    $("button.show").on("click",function (){
    $("section.first").fadeTo(1000,1);
    })
    $("button.hide").on("click",function (){
    $("section.first").fadeTo("fast",0.1);
    })
});
let para = document.createElement("p");
para.innerText = "This is p";
demo.append(para);

let anchor = document.createElement("a");
anchor.innerText = "This is link";
demo.append(anchor);

demo.getElementsByTagName("h1")[0].nextSibling.remove();let demo = document.getElementById("demo");
let h1 = document.createElement("h1");
h1.innerText = "HELLO";
demo.append(h1);

let para = document.createElement("p");
para.innerText = "This is p";
demo.append(para);

let anchor = document.createElement("a");
anchor.innerText = "This is link";
demo.append(anchor);

demo.getElementsByTagName("h1")[0].nextSibling.remove();
let data = document.getElementById("data");
let search = document.getElementById("search");
let demo = document.getElementById("demo");
let demoText = demo.innerText;
search.addEventListener("click", function () {
  let word = data.value.trim();
  let wordNew = new RegExp(word, "g");
  demo.innerHTML = demoText.replace(wordNew, `<mark>${word}</mark>`);
});
let data = document.getElementById("data");
let search = document.getElementById("search");
let demo = document.getElementById("demo");
let demoText = demo.innerText;
search.addEventListener("click", function () {
  let word = data.value.trim();
  let wordNew = new RegExp(word, "g");
  demo.innerHTML = demoText.replace(wordNew, `<mark>${word}</mark>`);
});
let img = document.getElementsByTagName("img");
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function () {
    this.setAttribute("src", "image/03.png");
  });
}
let demo = document.getElementsByTagName("section");
let h1 = demo[0].getElementsByTagName("h1");
let p = demo[0].getElementsByTagName("p");
let a = demo[0].getElementsByTagName("a");
a[0].addEventListener("click", () => {
  h1[0].setAttribute("class", "heading");
  p[0].setAttribute("class", "paragraph");
  a[0].setAttribute("class", "link");
});
let x =['a','b','c']
let d = x.splice(1,2,'x','y')
console.log(d,x)
let para = document.getElementsByTagName("p");
para[0].addEventListener("click", function () {
  for (let i = 0; i < para.length; i++) {
    para[i].style.width = "50%";
    para[i].style.height = "100px";
    para[i].style.backgroundColor = "pink";
  }
});
let data = `abcdefghijklmnopqrstuvwxyz0123456789`;
document.getElementById("submit").addEventListener("click", function () {
  let captcha =
    data.charAt(Math.floor(Math.random() * 36 + 1)) +
    data.charAt(Math.floor(Math.random() * 36 + 1)) +
    data.charAt(Math.floor(Math.random() * 36 + 1)) +
    data.charAt(Math.floor(Math.random() * 36 + 1)) +
    data.charAt(Math.floor(Math.random() * 36 + 1));
  document.getElementById("data").innerText = captcha;
});
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

        document.getElementById("root").innerHTML = item
    }).catch(function (er) {
        console.log(er)
    })
}

function post() {
    let data = {
        userId: 100,
        id: 150,
        title: "Hello",
        body: "it is me"
    }
    axios.post("https://jsonplaceholder.typicode.com/posts", data).then(function (res) {
        console.log(res)
    }).catch(function (er) {
        console.log(er)
    })
}
getData.addEventListener("click", get)
postData.addEventListener("click", post)
a = document.getElementById("get");
let postData = document.getElementById("post");
let item = "";

function get() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(function (res) {
        res.data.map((elem) => {
            item += `
            <div class="person">
            <h3>${elem.userId}</h3>
            <h3>${elem.id}</h3>
            <h3>${elem.title}</h3>
            <h3>${elem.body}</h3>
            </div>
            `
        })
        document.getElementById("root").innerHTML = item
    }).catch(function (er) {let demo = document.getElementById("demo");
let h1 = document.createElement("h1");
h1.innerText = "HELLO";
demo.append(h1);

let para = document.createElement("p");
para.innerText = "This is p";
demo.append(para);

let anchor = document.createElement("a");
anchor.innerText = "This is link";
demo.append(anchor);

demo.getElementsByTagName("h1")[0].nextSibling.remove();
        console.log(er)
    })
}

function post() {
    let data = {
        userId: 100,
        id: 150,
        title: "Hello",
        body: "it is me"
    }
    axios.post("https://jsonplaceholder.typicode.com/posts", data).then(function (res) {
        console.log(res)
    }).catch(function (er) {
        console.log(er)
    })
}
getData.addEventListener("click", get)
postData.addEventListener("click", post)
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
for (let i = 0; i < 1000; i++) {
    if (i % 2 === 0) {
        document.write(`<h1
            style="text-align:cent
            er;box-shadow:inset 
            5px 5px 25px gray; 
            width:300px;margin:0 
            auto;">even= ${i}</
            h1>`);
    } else {
        document.write(`<h1
            style="text-align:cent
            er;box-shadow:inset 
            5px 5px 25px red; 
            width:300px;margin:0 
            auto;">odd= ${i}</
            h1>`);
    }
}
for (let i = 0; i < 100; i++) {
    if (i % 6 === 0) {
        document.write(`<h1 style="text-align:center;box-shadow:inset 5px 5px 25px gray; width:300px;margin:0 auto;">multiple 6= ${i}</h1>`);
    } else {
        document.write(`<h1 style="text-align:center;box-shadow:inset 5px 5px 25px red; width:300px;margin:0 auto;">multiple 6= ${i}</h1>`);
    }
}
let x = Number(prompt("How many number do you want to enter?"));
let sum = 0;
for (let i = 1; i <= x; i++) {
    let point = Number(prompt(`please eneter number ${i}...!`));
    sum += point;
}
document.write(`the total is = ${sum}`);
let x = prompt("please enter a number for factorial...");
let fact = 1;
for (let i = 1; i <= x; i++) {
    fact *= i;
}
document.write(`the resault is ${fact}`);
let x = Number(prompt("please enter a number for fibonachi..."));
let a = 1;
let b = 1;
let temp;
document.write(`${a}  ${b}  `);
for (i = 1; i < x; i++) {
    let sum = a + b;
    a = b;
    b = sum;
    document.write(`${sum}   `);
}
let x = Number(prompt("please enter a number for matris..."));
for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x; j++) {
        document.write(`<h1 
            style="display:inline-block;
            padding:5px;margin-bottom:20px;
            margin-left:40px;
            background-color:lightblue;">${0}</
            h1>`)
    }
    document.write(`<br>`);
}
let x = Number(prompt("please enter a number for matris..."));
for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= x; j++) {
            if (i == j) {
                document.write(`<h1 style="display:inline-block;padding:5px;margin-bottom:20px;margin-left:40px;background-color:lightblue;">${1}</h1>`);
            } else {
                document.write(`<h1 style="display:inline-block;padding:5px;margin-bottom:20px;margin-left:40px;background-color:lightblue;">${0}</h1>`)
            }
        }
        document.write(`<br>`);
    }

let x = Number(prompt("please enter a number..."));
let i = 1;
let sum = 1;
while (i <= x) {
    sum = sum * i;
    i++;
}
document.write(`factorial is:  ${sum}`);
let i = 10;
do {
    document.write(i);
    i++;
} while (i < 9)
let data = ['Fatemeh', 'Madihi', 30, 16.87, true];
document.write(data);
console.log(data);
document.write(`<h1>My name is ${data[0]} ${data[1]}. My age is ${data[2]} and my average is ${data[3]}.</h1>`)
console.log(data instanceof Array);
console.log(data.length);

for (let i = 0; i < data.length; i++) {
    document.write(`${data[i]}<br>`)
    console.log(data[i]);
}

let data = ["Fatemeh", "Madihi", 30, 16.81];
console.log(data);
data.unshift(true);
console.log(data);
    "fullname" => "ali",
]
let data = [];
data["firstname"] = "fatemeh";
data["lastname"] = "madihi"
data["age"] = 30;
console.log(data);
console.log(data["firstname"]);
console.log(data["lastname"]);
let data = ["Fatemeh", "Madihi", 30, true]
let demo = document.getElementById("demo");
demo.innerText = data.toString();

demo.innerText = data.join("*");
delete data[0];
demo.innerText = data.toString();
data.shift();
console.log(data);

let data = ["Fatemeh", "Madihi", 30, true]
let demo = document.getElementById("demo");
data.splice(1, 2, "Hello", 2002, false);
demo.innerText = data.toString();
console.log(data);
let data = ["Fatemeh", "Madihi", 30, true];
let new_data = [1, 2, 3, 4]
let demo = document.getElementById("demo");
data = data.concat(new_data);
demo.innerText = data.toString();
console.log(data);
let data = ["Fatemeh", "Madihi", 30, true];
let new_data = [1, 2, 3, 4]
let demo = document.getElementById("demo");
data.push(new_data);
demo.innerText = data.toString();
console.log(data);
let data = ["Fatemeh", "Madihi", 30, true];
let demo = document.getElementById("demo");
let data_new = data.slice(0, 2);
demo.innerText = data_new.toString();
console.log(data_new);
let data = [11, 15, 9, 5, 0, 14.5, 20, 30, 15.5];
let demo = document.getElementById("demo");
let data_new = data.sort();
demo.innerText = data_new.toString();
console.log(data_new);
let data = [11, 15, 9, 5, 0, 14.5, 20, 30, 15.5];
let demo = document.getElementById("demo");
let data_new = data.sort(function (a, b) {
    return b - a
});
demo.innerText = data_new.toString();
console.log(data_new);
let data = [11, 15, 9, 5, 0, 14.5, 20, 30, 15.5];
let demo = document.getElementById("demo");
let data_new = data.sort(function (a, b) {
    return b - a
});
demo.innerText = data_new.toString();
console.log(data_new)
let data = ["Fatemeh", "Madihi", 30, 16.81];
let demo = document.getElementById("demo");
let item = "";
data.forEach((elem, index) => {
    item += `<h1 style="color:blue; text-shadow:5px 5px 5px red;">${elem}</h1>`

});
demo.innerHTML = item;

let data = ["Fatemeh", "Madihi", 30, 16.81];
data.forEach((elem, index) => {
    data[index] = elem += ":test";
});
console.log(data)
let data = ["Fatemeh", "Madihi", 30, 16.81];
let new_data = data.map((elem, index) => {
    return elem += ":test";
});
console.log(data)
console.log(new_data)
let data = ["Fatemeh", "Madihi", 30, 16.81];
console.log(data.lastIndexOf("Fatemeh"))
if (data.lastIndexOf("Fatemeh") > -1) {
    console.log("Ok")
} else {
    console.log("Not Ok")
}
let data = {
    firstName: "Fatemeh",
    lastName: "Madihi",
    age: 30,
    email: "f@f.f",
    average: 16.81,
    check: true,
    sum: null,
    points: [20, 15, 10, 12, 18],
    degree: {
        master: "Ai",
        bachelor: "computer",
        phd: "manager"
    },
    car: undefined,
    result:function (){
        return 100;
    }
}
console.log(data.points)
console.log(data.points[3])

console.log(data.degree.phd)
console.log(data.result());

console.log(`my fulltname is ${data.firstName} ${data.lastName} and my email is ${data.email} and Am i gradutated my uni ${data.check} `);

let data = {
    firstName: "Fatemeh",
    lastName: "Madihi",
    age: 30,
    email: "f@f.f",
    average: 16.81,
    check: true,
    sum: null,
    points: [20, 15, 10, 12, 18],
    degree: {
        master: "Ai",
        bachelor: "computer",
        phd: "manager"
    },
    car: undefined,
    result: function () {
        return this.degree.master;
    }
}
console.log(data.points)
console.log(data.points[3])

console.log(data.degree.phd)
console.log(data.result());

console.log(`my fulltname is ${data.firstName} ${data.lastName} and my email is ${data.email} and Am i gradutated my uni ${data.check} `);
console.log(data["firstName"])

let button = document.getElementById("btn")
button.setAttribute("class", "test")
button.addEventListener("click", function (e) {
    console.log("hello")
})
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", 'https://jsonplaceholder.typicode.com/posts', false);
xmlHttp.send(null);
var data = xmlHttp.responseText;
var dataResult = JSON.parse(data);
console.log(dataResult);
let item = "";
let result = dataResult.map(function (elem, index) {
    item += `<section>
    <h3>userId: ${elem.userId}</h3>
    <h3>id: ${elem.id}</h3>
    <h3>title: ${elem.title}</h3>
    <h3>body: ${elem.body}</h3>
    </section>`
});
document.getElementById("demo").innerHTML = item;

let reData = JSON.stringify(dataResult)
console.log(reData);
let getData = document.getElementById("get");
let postData = document.getElementById("post");
let item = "";

function get() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(function (res) {
        res.data.map((elem) => {
            item += `
            <div class="person">
            <h3>${elem.userId}</h3>
            <h3>${elem.id}</h3>
            <h3>${elem.title}</h3>
            <h3>${elem.body}</h3>
            </div>
            `
        })
        document.getElementById("root").innerHTML = item
    }).catch(function (er) {
        console.log(er)
    })
}

function post() {
    let data = {
        userId: 100,
        id: 150,
        title: "Hello",
        body: "it is me"
    }
    axios.post("https://jsonplaceholder.typicode.com/posts", data).then(function (res) {
        console.log(res)
    }).catch(function (er) {
        console.log(er)
    })
}
getData.addEventListener("click", get)
postData.addEventListener("click", post)

let target = document.getElementById("target").innerText;
// let res = target.split(" ");
// console.log(res);
document.getElementById("search").addEventListener("click", function () {
  let data = document.getElementById("txt").value;
  let keyWord = target.slice(
    target.indexOf(data),
    target.indexOf(data) + data.length
  );
  let span = document.createElement("span");
  span.style.display = "inline-block";
  span.style.backgroundColor = "red";
  span.innerHTML = keyWord;
  document.getElementById("target").append(span);
  if (target.search(keyWord)) {
    console.log("ok");
  }
});
document.getElementById("txt").addEventListener("click", function (e) {
  for (let i = 0; i < res.length; i++) {
     if (res[i] === e.target.value) {
      console.log("o");
     }
   }
});


let data = document.getElementById("data");
 let x = `My name is Fatemeh Madihi`;
 let res = x.split(" ");
 for (let i = 0; i < res.length; i++) {
  if (res[i].indexOf("My")>-1) {
    data.innerHTML += `<div style="background-color:red;">${res[i]}</div>`;
  } else {
    data.innerHTML += `<div>${res[i]}</div>`;
  } }
console.log(res);
for (let i = 0; i < x.length; i++) {
   console.log(x[i]);
 }

let data = Math.abs(-100);
console.log("abs: ", data);
data = Math.sqrt(81);
console.log("sqrt: ", data);
data = Math.random();
console.log("random: ", data);
data = Math.round(2.5);
console.log("round: ", data);
data = Math.floor(2.5);
console.log("floor: ", data);
data = Math.ceil(2.5);
console.log("ceil: ", data);
data = Math.trunc(2.5);
console.log("trunc: ", data);
