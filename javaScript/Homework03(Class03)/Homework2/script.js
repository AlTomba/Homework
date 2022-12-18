function conversionYears(){
    let userInput = prompt("Enter conversion type(dog/human)")
    if (userInput === "Human" || userInput === "human"){
        let userInput2 = prompt("Enter conversion number.")
        let parsedInput = parseInt(userInput2)
        if(typeof(parsedInput)===`number` && !Number.isNaN(parsedInput)){
        let result = parsedInput * 7;
        alert(`${parsedInput} Human years = ${result} Dog years.`);
        return result;
    } else { alert("Wrong input!")}
    } else if(userInput === "Dog" || userInput === "dog"){
        let userInput2 = prompt("Enter conversion number.")
        let parsedInput = parseInt(userInput2)
        if(typeof(parsedInput)===`number` && !Number.isNaN(parsedInput)){
        let result = parsedInput / 7;
        alert(`${parsedInput} Dog years = ${result} Human years.`);
        return result;
    }else {alert("Wrong input!")}
    }else{
        alert("Wrong input!")
    }
}

conversionYears()