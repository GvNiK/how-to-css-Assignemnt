// variables
// arrays
// objects
// conditionals
// loops
// functions
// DOM
// project
// promises and fetch
// how to use API's
// project


// hello, codekaro, fullstack, mango, => keywords
// lapapa , dhfjksfks, ndmsadmad, 

// create a varaible => variables are lijke containers

// var coffee = 'nescafe';
// var coffee = 'brew'
// console.log(coffee)

// es6 => ecma script 6 => let and const
// let name = 'yash';
// let name = 'mayank';

// console.log(name)

// const salary = 40000;
// salary = 450000;
// console.log(salary)


// datatypes => what sort of data is being stored in the variable
let name = "yash";
let age = 24;
let isAlive = true;

// arrays
let hobbies = ['cooking', 'reading books', 'swimming']
// console.log(hobbies)
// hobbies[0] = 'teaching';
// hobbies.push('travelling')
// array.push is used to add new values to the array
// array.pop is used to remove the value from the end of the array
hobbies.pop()
// console.log(hobbies)



// objects => to store data of a user in a variables
// name, email, phonenumber, address, gender

// let user = ['yash', 24, 9876543210, 45000, 'Male', 'New Delhi'];
// let user = {
//     name: 'yash',
//     age: 24,
//     gender : 'Male',
//     address: 'New Delhi',
//     hobbies: ['teaching', 'reading books']
// }
// console.log(user)
// user.name = 'Himanshu'
// console.log(user.address)



// conditionals => if the age of the user is grater than 18 years

// if() => which gets converted to true or false

// if(0){
//     console.log('statement is true')
// }
// else{
//     console.log('Statement is false!')
// }

// truthy and falsy 
//falsy =>  false, 0, -0, "", '', null, undefined
// rest every other values will go in truthy


// functions and Loops

// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('Coffee, Sugar, Milk');


function add(num1, num2){
    console.log(num1 + num2)
}

// add(2,3)
// add(12,45)

// function sqr(n){
//     console.log(n*n)
// }

// loops
// for(initial point, condition, increment)

// for(let i=1; i<=10; i++){
//    sqr(i);
// }

const users = [
    { name: "Aarav Sharma", age: 24, salary: 45000, email: "aarav.sharma@example.com" },
    { name: "Priya Mehta", age: 28, salary: 52000, email: "priya.mehta@example.com" },
    { name: "Rohan Verma", age: 31, salary: 60000, email: "rohan.verma@example.com" },
    { name: "Anjali Singh", age: 26, salary: 48000, email: "anjali.singh@example.com" },
    { name: "Vikram Patel", age: 35, salary: 75000, email: "vikram.patel@example.com" },
    { name: "Sneha Iyer", age: 30, salary: 67000, email: "sneha.iyer@example.com" },
    { name: "Karan Kapoor", age: 27, salary: 55000, email: "karan.kapoor@example.com" },
    { name: "Neha Joshi", age: 29, salary: 59000, email: "neha.joshi@example.com" },
    { name: "Amit Das", age: 32, salary: 63000, email: "amit.das@example.com" },
    { name: "Ritika Chauhan", age: 25, salary: 47000, email: "ritika.chauhan@example.com" }
  ];
  

// calculate the inhand salary of these people 10% tds deduction


function calculateInHandSalary(name, salary){
    if(salary>50000){
        let inHand = salary - (.1*salary);
    }
    else {
        inHand = salary
    }
    console.log(name, " : " , inHand)

}
// for(i=0; i<10; i++){
//     calculateInHandSalary(users[i].name, users[i].salary)
// }
  



// DOM => Document Object model


function attended(){
    let heading = document.getElementById('heading')
    heading.innerText = 'Thanks for attending the Bootcamp!';
    let btn = document.getElementById('btn');
    btn.style.display = 'none'
    console.log(heading)
}


function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    let finalBill = document.getElementById('result')
    let result = amount.value / persons.value;
    finalBill.innerText = result;
}


let api = 'http://www.omdbapi.com/?apikey=61e576a4&t='

// promises

let title = document.getElementById('title');
let desc = document.getElementById('desc');
let date = document.getElementById('date');
let actors = document.getElementById('actors');
let direactors = document.getElementById('direactors');
let ratings = document.getElementById('ratings');
let poster = document.getElementById('poster');


function searchMovie(){
    let query  = document.getElementById('movieName');
    let finalApi = api + query.value
    fetch(finalApi).then(function(data){
        return data.json()
    }).then(function(data){
        console.log(data)
        title.innerText = data.Title;
        desc.innerText = data.Plot;
        date.innerText = data.Released;
        actors.innerText = data.Actors;
        direactors.innerText = data.Director;
        ratings.innerText = data.imdbRating;        ;
        poster.src = data.Poster;

    })
}