let firstName = ["Howard", "Isra", "Roman", "Bryan", "Finnley", "Shayla", "Markus"];
let lastName = ["Guerrero", "Harris", "Harvey", "Banks", "Benton", "Houston", "Wilson"];
let fullName = [];


function fullnameFunction(){
    let counter = 0;
    let item = 0;
    while(counter < firstName.length && counter < lastName.length){
        let name = firstName[item];
        let surname = lastName[item];
        let numVal = counter + 1;
        fullName.push(`${numVal}.${name} ${surname}`)
        item++;
        counter++;
    }
    console.log(fullName);
}

fullnameFunction();