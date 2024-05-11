// Write a program to return the reverse of a number
// Input
// n=123
// output
// 321

function reverse(n) {
  let result = 0;
  let digit;
  while (n > 0) {
    digit = n % 10;
    result = result * 10 + digit;
    n = Math.floor(n / 10);
  }
  return result;
}

console.log(reverse(1234));
