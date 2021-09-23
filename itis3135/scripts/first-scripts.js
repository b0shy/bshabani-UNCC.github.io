var userName = prompt("What is your name?");

var userHowAreYouDoing = prompt("How are you doing?");

var todaysDate = new Date();

var date = (todaysDate.getMonth() + 1) + '-' + todaysDate.getDate()
+ '-' + todaysDate.getFullYear();

var time = todaysDate.getHours() + ':' + todaysDate.getMinutes()
+ ':' + todaysDate.getSeconds();

var companyName = "Baboonish Snail";

document.write("Today is " + date + ", and the time is: " + time + 
"<br>The " + companyName + " welcomes you, " + userName + 
"!<br>We're glad you are doing " + userHowAreYouDoing + "!<br>");

function snailTax(subtotal, taxPercent, taxCalculation, total){
    subtotal = 762.45;
    taxPercent = .05;
    taxCalculation = subtotal*taxPercent;
    total = subtotal + taxCalculation;
    window.alert("The total cost of one baboonish snail plus tax is $" + total.toFixed(2));
}

function sumOfPromo(snailCost, accessoriesBundle, subtotal, taxPercent, taxCalculation, total){
    snailCost = 762.45
    accessoriesBundle = 300.99
    subtotal = snailCost + accessoriesBundle;
    taxPercent = .05;
    taxCalculation = subtotal*taxPercent;
    total = subtotal + taxCalculation;
    window.alert("The total cost of the snail and accessories bundle plus tax is $" + total.toFixed(2));
}

function snailFact(snailFactOne, snailFactTwo, snailFactThree){
    snailFactOne = "The larger the two round spots on the rear of the snail, the more baboonish that snail is!";
    snailFactTwo = "\nBaboonish snails are the most ruthless and savage snail species!";
    snailFactThree = "\nBaboonish snails can only be found in south west Antarctica!";
    window.alert("Here are 3 fun facts about baboonish snails!\n" + snailFactOne + snailFactTwo +snailFactThree);
}

function snailCaloricIntake(smallSnail, mediumSnail, largeSnail){
    smallSnail = 75;
    mediumSnail = 125;
    largeSnail = 200;
    window.alert("The average daily caloric intake for a small snail is " + smallSnail +
    "\nThe average daily caloric intake for a medium snail is " + mediumSnail +
    "\nThe average daily caloric intake for a large snail is " + largeSnail);
}

function snailFoodCost(smallSnail, mediumSnail, largeSnail){
    smallSnail = 0.50;
    mediumSnail = 1.25;
    largeSnail = 2.00;
    window.alert("The average daily food cost for a small snail is $" + smallSnail +
    "\nThe average daily food cost for a medium snail is $" + mediumSnail +
    "\nThe average daily food cost for a large snail is $" + largeSnail);
}

let buttonSnailTax = document.createElement("button");
buttonSnailTax.innerHTML = "Snail Tax";
buttonSnailTax.onclick = snailTax;
document.body.appendChild(buttonSnailTax);

let buttonSumOfPromo = document.createElement("button");
buttonSumOfPromo.innerHTML = "Promo Deal Total";
buttonSumOfPromo.onclick = sumOfPromo;
document.body.appendChild(buttonSumOfPromo);

let buttonSnailFact = document.createElement("button");
buttonSnailFact.innerHTML = "Snail Facts";
buttonSnailFact.onclick = snailFact
document.body.appendChild(buttonSnailFact);

let buttonSnailCaloricIntake = document.createElement("button");
buttonSnailCaloricIntake.innerHTML = "Snail Caloric intake";
buttonSnailCaloricIntake.onclick = snailCaloricIntake;
document.body.appendChild(buttonSnailCaloricIntake);

let buttonSnailFoodCost = document.createElement("button");
buttonSnailFoodCost.innerHTML = "Snail Food Cost";
buttonSnailFoodCost.onclick = snailFoodCost;
document.body.appendChild(buttonSnailFoodCost);