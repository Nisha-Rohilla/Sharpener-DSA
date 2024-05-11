function numbers(n, m) {
  for (let i = 1; i <= n; i++) {
    if (i == m) {
      break;
    }
    console.log(i);
  }
}
numbers(10, 11);
