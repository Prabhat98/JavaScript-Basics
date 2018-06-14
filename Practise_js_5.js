/* Prototypes */

/*
let p = 
{
  a:10
}

let q = Object.create(p);
q.b = 20;

let r = Object.create(q);// creates an object using an existing object and provides that object an __proto__ object
r.c = 30;

console.log(p)
console.log(q)
console.log(r)

console.log(r.a)
console.log(r.b)
console.log(r.c)

console.log(q.a)
console.log(q.b)
console.log(q.c)
 
console.log(p.a)
console.log(p.b)
console.log(p.c)
*/

/* Asynchronous Functions */

/*
function task(done)
{
  console.log("task1")
  done();
}

task(function ()// This function is the done function itself
{
  console.log("task2")// first task function is called and it executes and then from the body of task done is called and this body executes
})
console.log("task3");
*/

/*
function done()
{
  console.log("task was done");
}

setTimeout(done,1000)
console.log("we did a task")
*/


/* Async Advanced */

/*
let a = false ; 
setTimeout(
function()
{
  a=true;
},1000
)
while (!a)
{
  for (var i = 1 ; ;i++)
{
    console.log(i);//will never stop because timeout will never get a chance to execute coz while will always be running
}
}
*/
