// Write a program to print the digits of a number .
// Input:-
// N - 153 .
// output:-
// 3
// 5
// 1

function print_digit(n) {
  while (n > 0) {
    let i = Math.floor(n % 10);
    console.log(i);
    n = Math.floor(n / 10);
  }
}
print_digit(153);
