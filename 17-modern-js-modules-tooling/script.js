// Importing module

/**
 * Exporting and Importing in ES6 Modules
 */
/*
// import {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// console.log(price, tq);
// addToCart('bread', 5);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// console.log(price);
 */

import add, {cart} from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

/**
 * The Module Pattern
 */
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 33;

  const addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`)
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);
 */

/**
 * CommonJS Modules
 */
/*
// both below are defined in nodeJS
// Export
export.addToCart = function (product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
};

// Import
const {addToCart} = require('./shoppingCart');
 */

/**
 * Introduction to NPM
 */

// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {product: 'bread', quantity: 5},
    {product: 'pizza', quantity: 2}
  ],
  user: {loggedIn: true}
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

console.log(stateClone);
state.user.loggedIn = false;

console.log(stateDeepClone);

// if(module.hot) {
//   module.hot.accept()
// }

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const felipe = new Person('Felipe');

console.log('Felipe' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';
