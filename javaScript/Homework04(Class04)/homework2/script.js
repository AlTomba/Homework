let array = [7, "dog", 5, "cat", 28, 3, "mouse", 14];
sum = 0;

function validateNumber(){
    let temporaryArray = [];
    for(let item of array){
    if(typeof(item) === `number` && !Number.isNaN(item)){
    sum += item;
    } else {
     console.log("Error, not a number!")
    }
}
console.log(sum)
}
validateNumber()