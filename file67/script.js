'use strict';


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The New findLast and findLastIndex Methods

console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// 'Your latest large movement was X movements ago'

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 2000
);
console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);




