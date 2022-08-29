function hasTargetSum(array, target) {
  // Write your algorithm here
  const numberSeen = {};

  for (const number of array) {
    // n steps
    const complement = target - number;
    if (complement in numberSeen) return true;
    numberSeen[number] = true;
  }

  return false;
}

//console.log(hasTargetSum([3,8,12,4,11,7],10));

/* 
  Write the Big O time complexity of your function here
  space:0(n)
*/

/* 
  Add your pseudocode here
  hasTargetSum([3,8,12,4,11,7],10)
  numberSeen = {1:true,2:true}
*/

/*
  Add written explanation of your solution here

  create an object to keep track of numbers we've already seen
  iterate through each number in the array
    for the current num, identify a complement that adds to the target (comp = target - num)
    check if any key on our object is the complement
      if so, return true
      otherwise, add that number to the object
  if I reach the end of the array, return fal
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
