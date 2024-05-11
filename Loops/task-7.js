// Write a program to print whether a given number is an Armstrong number or not..
// (Armstrong number is a number in which all the sum of cubes of digits is equal to the number
// Example:-
// Input
// n=153
// Output
// true

function armstrong(n) {
  let sum = 0;
  let number = n;

  let temp = number;

  while (temp > 0) {
    let reminder = temp % 10;
    sum += reminder * reminder * reminder;
    temp = parseInt(temp / 10);
  }

  if (sum === number) {
    console.log(true);
  } else {
    console.log(false);
  }
}

armstrong(123);
