function calculation(x, y, ...num) {
  let sum = 0;
  for (let i of num) {
    sum = sum + i;
  }
  sum = sum + x + y;
  console.log(sum);
}

calculation(10, 7, 2, 1, 2);
