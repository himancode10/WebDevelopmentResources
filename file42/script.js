'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order : function(starterIndex, mainIndex){
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }

};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr; //destructing 
console.log(x,y,z);

let[main, ,secondary] = restaurant.categories;
console.log(main,secondary);

// SWITCHING VARIABLES
// type--1
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

// type--2 with destructuring

[main,secondary]=[secondary,main];
console.log(main,secondary);



// console.log(restaurant.order(2,0)); 

// this is the destructuring assignment
// RECEIVE 2 RETURN VALUES FROM A FUNCTION

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

const nested = [2,4,[5,6]];
//const [i, ,j] = nested; // Output = 2 (2) [5, 6];
//console.log(i, j);

// we need to do destructuring inside of destructuring---for all individual values or separate variables
const [i, ,[j,k]] = nested;
console.log(i, j, k);

// default values

const [p=1,q=1,r=1]= [8,9];
console.log(p,q,r);










