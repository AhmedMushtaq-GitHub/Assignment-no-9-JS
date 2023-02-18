// 1- Declare a variable called myVar and assign it the value of 5. Then, using the console.log function, print the value of myVar to the console.
let
    myVar = 5;
console.log(myVar);

// 2- Declare a variable called myString and assign it the value of "Hello, world!". Then, using the alert function, display the value of myString in an alert box.
let
    myString = "Hello, world!";
alert(myString);

// 3- Declare two variables called num1 and num2, and assign them the values of 5 and 10, respectively. Using the prompt function, ask the user to enter a number, and store the result in a variable called userNum. Then, using the console.log function, print the sum of num1, num2, and userNum to the console.
let
    num1 = 5;
let
    num2 = 10;
let
    userNum = parseInt(prompt("Please enter a number:"));
let
    sum = num1 + num2 + userNum;
console.log(sum);
// 4- Declare a variable called myBoolean and assign it the value of true. Using an if statement, check if myBoolean is true, and if so, use the console.log function to print "It's true!" to the console. Otherwise, print "It's false!" to the console.

let
    myBoolean = true;
if
    (myBoolean) {
    console.log("It's true!");
}
else {
    console.log("It's false!");
}

// 5- Use an if/else statement to check if a number is even or odd. If the number is even, log "even" to the console. If the number is odd, log "odd" to the console.
let
    number = 7;
if
    (number % 3 === 2) {
    console.log("even");
}
else {
    console.log("odd");
}

// 6- Use the + operator to concatenate two strings together. Then, log the result to the console.

let
    str1 = "umair";
let
    str2 = "khalid";
let
    result = str1 + str2;
console.log(result);

// 7- Use the * operator to multiply two numbers together. Then, log the result to the console.

let
    number1 = 2;
let
    nummber2 = 3;
let
    rslt = num1 * num2;
console.log(rslt);


// 8- Write a program that takes a string from the user using prompt and checks if it's equal to "password". If it is, display an alert saying "Access granted", otherwise display an alert saying "Access denied".
let
    input = prompt("Enter your password:");
if
    (input === "password") {
    alert("Access pass");
}
else {
    alert("Access fail");
}

// 9- Write a program that takes three numbers as input and returns the largest of those three numbers.
let
    numb1 = parseFloat(prompt("Enter first number:"));
let
    numb2 = parseFloat(prompt("Enter second number:"));
let
    numb3 = parseFloat(prompt("Enter third number:"));
if
    (numb1 >= numb2 && numb1 >= numb3) {
    console.log(numb1);
}
else if
    (numb2 >= numb1 && numb2 >= numb3) {
    console.log(numb2);
} else {
    console.log(numb3);
}

// 10 -Write a program that takes two strings from the user using prompt and checks if they are equal. If they are, display an alert saying "The strings are equal", otherwise display an alert saying "The strings are not equal".

let
    string1 = prompt("Enter string 1:");
let
    string2 = prompt("Enter string 2:");

if
    (string1 === string2) {
    alert("The strings are equal");
}
else {
    alert("The strings are not equal");
}



