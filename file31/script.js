// 1. Sum of numbers from 1 to 100 using a for loop
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`Sum of numbers from 1 to 100: ${sum}`);

// 2. Filtering even numbers from an array using for...of loop
const numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
const evenNumbers = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
console.log(`Even numbers: ${evenNumbers.join(', ')}`);

// 3. Iterating over an object using for...in loop
const person = { name: 'John', age: 30, job: 'Developer' };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 4. Nested for loops to print multiplication tables
for (let i = 1; i <= 2; i++) {
  console.log(`Multiplication table for ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
