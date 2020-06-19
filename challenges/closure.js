// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//The function "myFunction" creates a closure around the nestedFunction. The nestedFunction has access to the variables in the global scope as well as within the closure scope. The variable internal sits within that closure. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */



function summation (num){
  let counter = 0
  for(let i = 0; i <= num; i++){
    counter += i;
  }
    return counter
}

console.log(summation(4))
console.log(summation(4))