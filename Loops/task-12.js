// Write a program to print even numbers from 1 to n except numbers which are divisible by 4.

function print_even(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0 && i % 4 != 0) {
      console.log(i);
    }
  }
}
print_even(10);
