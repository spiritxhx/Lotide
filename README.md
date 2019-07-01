# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @spiritxhx/lotide`

**Require it:**

`const _ = require('@spiritxhx/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays(Arrays1, Arrays2)`: Compare Array1 and Array2, return true is they are equal, false if they are not, took nested arrays in consideration
* `eqObjects(Object1, Object2)`: Compare Object1 and Object2, return true is they are equal, false if they are not, took nested objects in consideration
* `assertEqual(a, b)`: Compare a and b, if a equals b, return true, if not, return false. 
* `head(Array)`: Return the first element of the Array. 
* `middle(Array)`: Return the middle element(s) of the given Array, return 1 element if Array.length is odd, return 2 elements if Array.length is even. 
* `tail(Array)`: Return the Array without the 1st element. 
* `assertArraysEqual(Array1, Array2)`: Compare Array1 and Array2, console.log out the comparison result with emojis.
* `flatten(Array)`: Modify the multiple level nested arrays to a single level array and return it. 
* `countOnly(Object, namesToCount)`: Return an object containing the counts for given names in Object. 
* `letterPostions(String)`: Return an object containing the appearance positions for each letter in the String. 
* `findKeyByValue(Object, value)`: Return the key(s) which have the given value in Object. 