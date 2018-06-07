/* FUNCTION EXAMPLES */


/*
function fun()
{
console.log("Hello !!")
}
var say = fun ; // made a variable named "say" and assigned to it "fun" which itself is a function  
console.log(say==fun);//evaluates to true
say(); // coz now say is same as fun
*/


/*
function add(x,y)
{
return (x+y);
}
let sum = add(4,5);// sum is the value that add function returns.
let sum=add; // sum is the add function itself.
console.log(sum);
*/

/* HIGHER ORDER FUNCTION */
/* FUNCTION AS AN ARGUMENT */


/*
let str = "prabhat ojha";
console.log(str.split(" ")[1]);
*/


/*
function getFirstName(fullName)
{
return(fullName.split(" ")[0]);
}

function greeter(findName,fullName)// findName is the function getFirstName itself
{
let firstName = findName(fullName);
console.log("Hello "+firstName);
}

greeter(getFirstName,"Prabhat Ojha");// getFirstName is not called here but passed just like an object here.
*/

/* RETURNING A FUNCTION FROM A FUNCTION */


/*
function createGreeter(name)
{
let firstName = name.split(" ")[0];
function greeter() // created a function inside the scope of another function
{
console.log("Hello "+firstName);
}
return greeter;// returning the newly created function in the function ( here it is not an object but a function )
}
let a = createGreeter("John Doe");
let b = createGreeter("Harry Potter");

a();
b();
*/


let a =function fun(){console.log("YO!!")}
let b =a;// just passing the references, all three are the same function
let c =b;

b();
a();
c();

// CLOSURE SCOPE
/* This function works perfectly fine and gives output as 9 */

function add (x,y)
{
var a =x;
var b = y;
function fun()
{
console.log(a+b);
}
return fun;
}
var sum= add(4,5);// function add returns fun which gets assigned to sum this means that sum is fun function itself
sum();// although add function has ended but we have sum so we have fun so we have access to variables of add, this is called 
// closure scope


/* While this throws an error that sum is not a function */


function add (x,y)
{
return (x+y);
}
var sum= add(4,5);
sum();

/* Closure */

function createCounter(initVal,delta)
{
let val = initVal;
function counter()
{
val=val+delta;
return val;
}
return counter;
}

var callCounter = createCounter(5,5);// the entire body runs when we run this line

console.log(callCounter());// untill unless we have callCounter the variables visible to callCounter will persist, the values remain intact 
console.log(callCounter());// hence the function counter is called when we call callCounter 
console.log(callCounter());// and the values dont reset coz only counter function is run
console.log(callCounter());// callCounter function when called is counter function itself coz this gets returned to callCounter as an object








