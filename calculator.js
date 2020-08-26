
// var = numberElement
var cal = document.getElementById("screen");
var val = cal.value;

// Function to show button
function showButton(val)
{
    var input = cal.value;
    var toDisplay = document.getElementById(val.id).innerHTML;
    cal.value = input + toDisplay; 
}
// Clear the input element 
function clearInputEl()
{
    cal.value = " ";
}
// A function that add numbers 
function addition ()
{
    var final = cal.value.split('+');
    console.log(final);
    var a = Number(final[0]);
    var b = Number(final[1]);
    console.log(a, b);
    console.log(a + b);
    var result = a + b;

    cal.value = result;
}
// A function that multiply numbers 
function multiplication ()
{  
    var final = cal.value.split('*')
    var a = Number(final[0]);
    var b = Number(final[1]);
    var result = a * b;
    cal.value = result;
}
// A function that substract numbers 
function substraction ()
{
    var final = cal.value.split('-');
    var a = Number(final[0]);
    var b = Number(final[1]);
    var result = a - b;
    cal.value = result;
}
 // A function that divide numbers 
function division ()
{
    var final = cal.value.split('/');
    var a = Number(final[0]);
    var b = Number(final[1]);
    var result = a / b;
    cal.value = result;
}
function delect()
{
    var x = cal.value;
    if (x.length > 0)
    {
        x = x.substring(0, x.length-1);
        cal.value = x;
    }
}
function displayResult()
{
    saveResult = cal.value;
    if(saveResult.includes("+"))
    {
        addition();
    }
    if(saveResult.includes("-"))
    {
        substraction();
    }
    if(saveResult.includes("*"))
    {
        multiplication();
    }
    if(saveResult.includes("/"))
    {
        division();
    }
}   