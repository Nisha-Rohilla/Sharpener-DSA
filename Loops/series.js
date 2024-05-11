// By using while loop and continue statement

// Print all number from 1 to n but then it should not be divisible by 5

function series(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      continue;
    }
    console.log(i);
  }
}
series(7);
