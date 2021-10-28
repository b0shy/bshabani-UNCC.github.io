var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000, 2500, 1500, 4000, 2200, 1200, 4400];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    //event handlers

    document.getElementById("update").onclick = function updateCalorie() {
        var userCalories = document.getElementById("calorie");

        if (document.getElementById("monday").checked) {
            calories.splice(0, 1, userCalories.value);
        }
        else if (document.getElementById("tuesday").checked) {
            calories.splice(1, 1, userCalories.value);
        }
        else if (document.getElementById("wednesday").checked) {
            calories.splice(2, 1, userCalories.value);
        }
        else if (document.getElementById("thursday").checked) {
            calories.splice(3, 1, userCalories.value);
        }
        else if (document.getElementById("friday").checked) {
            calories.splice(4, 1, userCalories.value);
        }
        else if (document.getElementById("saturday").checked) {
            calories.splice(5, 1, userCalories.value);
        }
        else if (document.getElementById("sunday").checked) {
            calories.splice(6, 1, userCalories.value);
        }

        if (document.getElementById("calorie").value == "") {
            alert("Enter a valid number");
            document.getElementById("calorie").value = "";
        } else {
            alert(calories.join(','));
            document.getElementById("calorie").value = "";
        }

    }

    document.getElementById("averageCalorie").onclick = function showAverageCalories(){
        var total = 0;

        for(let i = 0; i < calories.length; i++){
            total += calories[i];
        }

        var averageCalories = (total / calories.length);

        document.getElementById("averageInput").style.color = "green";
        document.getElementById("averageInput").style.backgroundColor = "transparent";

        document.getElementById("averageInput").value = averageCalories;
    }

    function showMax(){

        return Math.max(...calories);

    }

};
