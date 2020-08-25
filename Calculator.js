
// var = numberElement
var cal = document.getElementById("screen");

var val = cal.value;

// Show 
function showBtnOne()
{
    var input = cal.value;

    var toDisplay = document.getElementById("num1").innerHTML;

    cal.value = input + toDisplay; 
}

// Clear the input element 
function clearInputEl()
{
    cal.value = " ";
}

// showBtnTwo
function showBtnTwo()
{
    var input = cal.value;

    var toDisplay = document.getElementById("num2").innerHTML;

    cal.value = input + toDisplay; 
}

// showBtnThree
function showBtnThree()
{
    var input = cal.value;

    var toDisplay = document.getElementById("num3").innerHTML;

    cal.value = input + toDisplay; 
}

// showBtnFour
function showBtnFour()
{
    var input = cal.value;

    var toDisplay = document.getElementById("num4").innerHTML;

    cal.value = input + toDisplay; 
}

// showBtnFive
function showBtnFive()
{
    var input = cal.value;

    var toDisplay = document.getElementById("num5").innerHTML;

    cal.value = input + toDisplay; 
}

// showBtnSix
function showBtnSix()
{
    var input = cal.value;

    var toDisplay = document.getElementById("num6").innerHTML;

    cal.value = input + toDisplay; 
}

// showBtnSeven
function showBtnSeven()
{
    var input = cal.value;

    var toDisplay = document.getElementById("num7").innerHTML;

    cal.value = input + toDisplay; 
}

// showBtnEight
function showBtnEight()
{
    var input = cal.value;

    var toDisplay = document.getElementById("num8").innerHTML;

    cal.value = input + toDisplay; 
}

// showBtnNine
function showBtnNine()
{
    var input = cal.value;

    var toDisplay = document.getElementById("num9").innerHTML;

    cal.value = input + toDisplay; 
}

// showBtnZero
function showBtnZero()
{
    var input = cal.value;

    var toDisplay = document.getElementById("num0").innerHTML;

    cal.value = input + toDisplay; 
}



function showBtnAdd()
{
    var input = cal.value;

    var toDisplay = document.getElementById("add").innerHTML;

    cal.value = input + toDisplay; 
}

function showBtnSub()
{
    var input = cal.value;

    var toDisplay = document.getElementById("sub").innerHTML;

    cal.value = input + toDisplay; 
}

function showBtnMulti()
{
    var input = cal.value;

    var toDisplay = document.getElementById("multi").innerHTML;

    cal.value = input + toDisplay; 
}

function showBtnDivi()
{
    var input = cal.value;

    var toDisplay = document.getElementById("divi").innerHTML;

    cal.value = input + toDisplay; 
}

function showBtnPoint()
{
    var input = cal.value;

    var toDisplay = document.getElementById("point").innerHTML;

    cal.value =  input + toDisplay; 
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