
/********************

In this exercise, we will be creating a function that takes in two numbers and returns the sum

Step 1. Create and declare a function,
that takes in two parameters

Step 2. In the function body, add both
numbers together and return the sum

Step 3. Call the function

For extra credit, create a conditional that executes a message if the sum is over 10 or less than 100 

********************/

// Your Solution:
function sum(a, b){
  return a+b;
}
var res = sum(11,5);
if(res>10){
  console.log("Sum is greater than 10: "+ res);
}else{
  console.log("Sum is less than 10: "+ res);  
}

