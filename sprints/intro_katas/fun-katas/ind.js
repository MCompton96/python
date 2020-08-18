function calculateDivisors(num) {
    let arr = [];
    let sum = 0;
    for (let i = 0; i <= num; num++) {
      if (i % 3 === 0 || i % 5 === 0) {
        arr.push(i);
      }
    } console.log(arr);
    // Your code here
  }

console.log(calculateDivisors(5));