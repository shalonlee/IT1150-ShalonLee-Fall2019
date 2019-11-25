//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is " + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + " y="+y); 

}
function multiplication()
{
    var x = 25;
    var y = 42;
    var z = x * y;
   alert(z);
}

function division()
{
    var a = 48;
    var b = 12;
    var division = a/b;
    alert(division + " pencils");
}
/* JS statements
Conditional statements:
If statement
Switch statement
Loops:
For loop
While loop
Do while loop
Break
*/

function compare()
{
    var charlie = 162;
    var john = 135;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit + " tropical? "+ isTropical);

}

function Repeat()
{
   var counter = 0;
   
   console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

   counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
   
    for (var counter=0; counter < 5; counter++)
    {
        console.log();
    } 
    alert( counter + "hello");
}

//numArray = []; 
function mean()
{

    var numbersArray=[25, 47, 98, 46, 52];
    total=0; 
    mean=0;
    
     for(var i=0; i<numbersArray.length; i++)
     {
      total+=numbersArray[i];
     }
     mean=(total/numbersArray.length);
  
     alert("The mean is " + mean)
}

function between()
{
total=0;
sum=0;
for (var i=2; i<200; i+=2)
{
    sum += i;
}
alert("The sum is " + sum)
}