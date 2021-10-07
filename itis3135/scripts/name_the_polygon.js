var userNumber = prompt("The Baboonish Snails want to know your number: ");

function validateEntry(userNumber){
    if(userNumber == "" || isNaN(userNumber) || userNumber < -10 || userNumber > 10){
        return false;
    }
    else{
        validatedUserNumber = Math.abs(userNumber);
        validatedUserNumber = Math.round(validatedUserNumber);
        return true, validatedUserNumber;
    }
}

function getShape(validatedUserNumber){
    if(validatedUserNumber == 1){
        return window.alert("Henagon");
    }
    else if(validatedUserNumber == 2){
        return window.alert("Digon");
    }
    else if(validatedUserNumber == 3){
        return window.alert("Trigon");
    }
    else if(validatedUserNumber == 4){
        return window.alert("Tetragon");
    }
    else if(validatedUserNumber == 5){
        return window.alert("Pentagon");
    }
    else if(validatedUserNumber == 6){
        return window.alert("Hexagon");
    }
    else if(validatedUserNumber == 7){
        return window.alert("Heptagon");
    }
    else if(validatedUserNumber == 8){
        return window.alert("Octagon");
    }
    else if(validatedUserNumber == 9){
        return window.alert("Enneagon");
    }
    else if(validatedUserNumber == 10){
        return window.alert("Decagon");
    }
}

while(validateEntry(userNumber) == false){
    userNumber = prompt("The Baboonish Snails want to know your number: ");
}
getShape(validatedUserNumber);