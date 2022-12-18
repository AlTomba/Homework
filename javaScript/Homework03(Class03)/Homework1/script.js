function checkType(parameter){
    let parameter1 = typeof(parameter);
    let parameter2 = parameter1.toString();
    switch(parameter2){
        // case "object":
        //     console.log(parameter2);
        //     break;  
        case "boolean":
            console.log(parameter2);
            break;
        case "number":
            console.log(parameter2);
            break;
        case "string":
            console.log(parameter2);
            break;
        case "undefined":
            console.log(parameter2);
            break;
        default:
            console.log("No such parameter");
            break;
    }
}


checkType(true);
checkType(1);
checkType("1");
checkType();