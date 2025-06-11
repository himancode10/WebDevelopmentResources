'use strict';

const restaurant = {
  naMe: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours : {
    thu : {
        open: 12,
        close: 22,
    },
    fri : {
        open: 11,
        close: 23,

    },
    sat : {
        open: 0,//open 24 hours
        close: 24,

    },
  },


  order : function(starterIndex, mainIndex){
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery : function({starterIndex=1, mainIndex=0, time='20.00', address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}will be delivered to ${address} at ${time}`);
  },

  orderPasta : function(ing1,ing2,ing3){
  console.log(`Here is your decilicous pasta with ${ing1},${ing2} and ${ing3}`);
}

};



// The Spread Operator (...)  we used the spread operator to build new arrays or to pass multiple values into a function.





const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

console.log(...str);


// Real-world example
const ingredients = [
   prompt('Let\'s make pasta! Ingredient 1?'),
   prompt('Ingredient 2?'),
   prompt('Ingredient 3'),
];
console.log(ingredients);

 restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
 restaurant.orderPasta(...ingredients);