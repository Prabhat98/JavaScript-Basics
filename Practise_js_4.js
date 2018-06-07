/* Arrays and sorts */

/*
let arr = [6,3,9,1,7,2,14,26,35];
console.log(arr.sort());// sorts in lexicographical manner

function compare(a,b)
{
  return a-b;// return b-a; sorts in reverse order
}

let sortedArr = arr.sort(compare);//arr array is now sorted it is not the old array now but a sorted one.

console.log(sortedArr);// sorts properly the way we want
*/

/* Maps */

/*
let arr = [45,23,87,98,34,65]
console.log(arr);
let arr1 = arr.map(function(item)
{
  return item*item; // will return the square of every item in arr array
})

console.log(arr1);

let arr2 = arr.map(Math.sqrt)
console.log(arr2);
*/

/* Filter */

/*
let arr = [1,2,3,4,5,6,7]
let arr2 = arr.filter(function(item) // returns bool values, either true or false
{
  return (item%3===0);
} )
console.log(arr2);
*/

/* Example of filters */

/*
let arr = ["paneer tikka","onion rings","garlic naan","chicken tandoor","egg curry"];

function isVeg(food)
{
  if(food.toLowerCase().indexOf("chicken")!==-1)
    {
      return false;
    }
  if(food.toLowerCase().indexOf("egg")!==-1)
    {
      return false;
    }
  return true;
}
function onionGarlicFree(food)
{
  if(food.toLowerCase().indexOf("garlic")!==-1)
    {
      return false;
    }
  if(food.toLowerCase().indexOf("onion")!==-1)
    {
      return false;
    }
  return true;
}

let vegMenu = arr.filter(isVeg);
let jainMenu = arr.filter(isVeg).filter(onionGarlicFree);

console.log(arr);
console.log(vegMenu);
console.log(jainMenu);
*/

/* Reduce function */

let arr = [1,2,3,4,5,6]

let sum = arr.reduce(function (acc,item)
{
  return acc+item;
}
)

console.log(sum);
