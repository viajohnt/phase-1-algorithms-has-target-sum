function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    debugger
    const difference = target - array[i];
    console.log(difference);
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === difference)  {
        return true;
      } 
    }
    
}
return false;
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
I want to itterate over the array and check if the sum is equal to the target
for each element in the array, if the sum is equal to the target, return true
if not, return false. Target minus the number in array = complement number
if I reach the end of the array, if 
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  //add your own custom tests in here
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5], 6));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5], 7));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5], 8));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
}

module.exports = hasTargetSum;
