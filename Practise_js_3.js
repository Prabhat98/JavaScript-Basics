/* Closure using objects */

function createCounter(initVal,delta)
{
  let val = initVal;
  let counter=
  { 
    incr:function()
	{
	  val=val+delta;	
	},	 
    decr:function()
	{
	  val=val-delta;
	},
    show:function()
	{
	  console.log(val);
	}
  }
  return counter;
}

let a = createCounter(50,5);
a.show();//50
a.incr();
a.incr();
a.show();//60
console.log(typeof a);//object
console.log(typeof a.show);//function
console.log(typeof a.show());//execution results in value 60 but overall the function does not return anything so undefined
