let userInput = prompt("Number of phones");
let userInput1 = parseInt(userInput);
let iphone = 119.95;
let tax = iphone * 5 / 100;
let total = userInput1 * (iphone + tax)
if (Number.isNaN(userInput1)){
    alert("Not a valid input")
} else{
console.log(total) }
