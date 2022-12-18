let array = ["Hello", "there", "students", "of", "SEDC", "!"]


function concatArray(){
    let a = array.length
    while(a > 1){
        if(a > 2){
        let comb1 = array[0].concat(" " + array[1]);
        array.shift();
        array.shift();
        array.unshift(comb1);
        a--;
    } else{
        let comb1 = array[0].concat(array[1]);
        array.shift();
        array.shift();
        array.unshift(comb1);
        console.log(`array = ${array}`);
        a--;
    }
    }
}

concatArray()
























/*for(let i = 0; i <= array.length + 2; i++){
    let comb1 = array[0].concat(" " + array[1])
    temporaryArray.push(comb1);
    array.shift();
    array.shift();
    array.unshift(temporaryArray[0]);
    temporaryArray.shift();
}

console.log(array);*/

