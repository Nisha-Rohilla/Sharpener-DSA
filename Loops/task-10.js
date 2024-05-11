// Write a program to print all odd numbers from 1 to n using for loops
// Example:-
// Input :-
// n=7
// Output :-
// 1
// 3
// 5
// 7

function odd_number(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
odd_number(7);
