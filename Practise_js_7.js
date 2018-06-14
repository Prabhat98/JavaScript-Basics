/* Promises */

/*
function someAsyncTask(callback)
{
  console.log("beginning of task")
  setTimeout(function()
  {
    console.log("end of task")
    callback();  
  },3000)
}
let somePromise = function ()
{
  return new Promise (function(resolve,reject)
{
  someAsyncTask(resolve);// resolve function is called if the task or the function is run successfully
})
}

somePromise().then(function()
{
  console.log("after task is complete")// to do something after the task has ended
})
*/

/* Deferred Resolve */

function somePromise()
{
  return new Promise (function(resolve,reject)
  {
    console.log("starting to download") 
    setTimeout(function()
      {
        console.log("downloading complete")
        resolve();
      },3000)
  })
}

let newPromise = somePromise();// promise object stored in newPromise
setTimeout(function()
{
  newPromise.then(function()// then runs not immediately after resolve but after 2 seconds
    {
      console.log("After Downloading")
    })
},5000)
