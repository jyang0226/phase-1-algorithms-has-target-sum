 // Write your algorithm here
 function hasTargetSum(array, target) {
  // Write your algorithm here

  const testedNumbers = new Set();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (testedNumbers.has(complement)) {
      return true;
    }
    testedNumbers.add(array[i]);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  hasTargetSum([3, 8, 12, 4, 11, 7], 10) 
  need to iterate thru the array for each element
  identify complementary numbers that helps reach target
  if complementary numbers appear, return true
  if nothing is complementary, return false
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
