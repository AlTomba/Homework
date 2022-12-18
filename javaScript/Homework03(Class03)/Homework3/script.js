let atmBalance = 500;

function cashOut(){
    alert (`Your current balance is ${atmBalance}$.`)
    let userInput = prompt("Enter the ammount you want to be withdrawn.");
    let parsedInput = parseInt(userInput);
    if(typeof(parsedInput) === `number` && !Number.isNaN(parsedInput)){
    if(parsedInput<atmBalance){
       result = atmBalance - parsedInput;
       alert(`You have ${result}$ left.`)
       return result;
    } else {alert("Balance insufficient!")}
} else {alert("Invalid input!")}
}


cashOut()