let array = [3, 5, 7, 9, 44, 72, 2, 19];
let max = array[0];
let min = array[0];



// function findMin(){
    for (i = 0; i < array.length; i++){
    if(min>=array[i]){
    min=array[i];
    }
}
//}
    
    
// function findMax(){
    for (i = 0; i < array.length; i++){
    if(max<=array[i]){
    max=array[i];
    }
}
// }



// function sumOfMinAndMax(){
let sum = min + max;
//     return sum;
// }

console.log(min);
console.log(max);
console.log(sum);