/*eslint-env browser*/

var miles;
var gallons;
var mpg;
var again = "y";

do {
    miles = window.prompt("Enter miles driven");
    miles = parseFloat(miles);
    gallons = window.prompt("Enter gallons of gas used");
    gallons = parseFloat(gallons);
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        mpg = parseInt(mpg, 10);
        window.document.write("Miles per gallon: " + mpg );
    } else {
        window.alert("One of both entries are invalid.");
    }
    again = window.prompt("Repeat entries? (y or n)");
    if (again === "y") {    
       window.alert("let's do it again.");   
    } else if (again === "n") {
        window.alert("sorry to see you leave, bye.");   
    } else {
        window.alert("Entry is not valid, repeat entries? (y or n).", "y");
        again = window.prompt("Repeat entries? (y or n)");
    }
} while (again === "y");