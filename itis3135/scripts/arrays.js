var person = [];

var salaries = [];

var $ = function(id){
    return document.getElementById(id);
}

window.onload = function() {
    $("addSalary").onclick = addSalary;
    
    $("displayResults").onclick = displayResults;
    
    $("displaySalary").onclick = displaySalary;
}

function addSalary(){
    console.log("add s");
    var salary = document.getElementById("salary").value;
    var persons = document.getElementById("person").value;
    if(persons==""){
        alert("Enter a valid person and salary");
    }
    else{
        salaries.push(salary);
        person.push(persons);
    }
}

function displayResults(){
    var averageSalary = 0;
    var totalSalary = 0;
    for(i=0; i<salaries.length; i++){
        totalSalary+=+salaries[i];
    }
    averageSalary = totalSalary/(salaries.length);
    var highestSalary = 0;
    var highestSalaryPerson = "";
    for(i=0; i<salaries.length; i++){
        if(salaries[i] > highestSalary){
            highestSalary=+salaries[i];
            highestSalaryPerson = person[i];
        }
    }
    var result = "<h2>Result:</h2><p>Average Salary = "+averageSalary+ "</p>";
    result+= "<p>Highest Salary was earned by "+highestSalaryPerson+" with a salary of "
    +highestSalary+"</p>";
    document.getElementById("results").innerHTML=result;
}

function displaySalary(){
    var addResults = "<h2>Salary:</h2><table><tr><th>person</th><th>salaries</th></tr>"
    for(i=0; i < salaries.length; i++){
        addResults += "<tr><td>"+ person[i]+"</td><td>"+salaries[i]+"</td></tr>";
    }
    addResults += "</table>";
    console.log(addResults);
    document.getElementById("results_table").innerHTML=addResults;
}

function dropDown() {
    document.getElementById("employeeDropDown").classList.toggle("show");
    
}