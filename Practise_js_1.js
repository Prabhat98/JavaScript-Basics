//console.log("wassup everybody")
//let me = "go";
//var i = "able";
//console.log(me);
//console.log(i);

/*
var a=10;
var message = "";
for(i=0;i<10;i++)
{
  message = message + i + " " ; 
}
console.log(message);
*/


/*
const d =10;
let a = 9;
a++;
console.log(a);
*/


/*
var obj = 
{
  a:"Hello",
  b:56,
  c:true,
  d:
    {
      p:"World",
      q:false,
      r:
        {
          x:20
        }
    }
};
console.log(obj.d.r.x)
*/


//var x = 10;
/*
function inc(x)
{x++;
//console.log(x);
return(x);
}
//var z=inc(x);
//console.log(z);

var y =inc("hello")
console.log(y);
*/


//console.log(""==0) // " " typecasted to 0

/*
var x= 10 ;// Var has function scope, let has block scope
function myfun()
{
var x= 20;
x++;
console.log(x);
if(true)
{
var x = 30;
x++;
console.log(x);
}
console.log(x);
}
myfun();
console.log(x);
*/

const a = 10;
function myfun()
{
// doin a = 90; throws an error coz it cannot be assigned again.
const a=90;// shows that const has block scope 
console.log(a);
}

myfun();
console.log(a);





