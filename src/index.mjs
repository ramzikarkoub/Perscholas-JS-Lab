// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

let result = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;
console.log("Are all numbers are divisible by 5?  ", result);

let result2 = n1 > n4;
console.log("Is the first number is larger than the last?  ", result);

let result3 = ((n2 - n1) * n3) % n4;
console.log(result3);

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log("is over 25", !isUnder25);

// How many gallons of fuel will you need for the entire trip?
const mph1 = 55;
const mph2 = 60;
const mph3 = 75;
const distance = 1500;
const fuelBadget = 175;
const costOfGallon = 3;

let mphResult = distance / 30;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
// if (n1 / 5 == 0 && n2 / 5 == 0 && n3 / 5 == 0 && n4 / 5 == 0) {
//   console.log("all the numbers are devisible by 5");
// } else {
//   console.log("all the numbers are NOT devisible by 5");
// }

// console.log("all the numbers are NOT devisible by 5");

const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;
