# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @gladdy23/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: Returns the first element of the array.
- `tail(array)`: Returns the array without the first element.
- `middle(array)`: Returns the middle element(s) of the array. For arrays with an odd number of elements, it returns one middle element; for arrays with an even number of elements, it returns two middle elements.
- `assertEqual(actual, expected)`: Compares two primitive values (numbers or strings) and logs whether they are equal or not.
- `assertArraysEqual(arr1, arr2)`: Compares two arrays and logs whether they are equal or not.
- `eqArrays(arr1, arr2)`: Checks if two arrays are equal by comparing their elements one by one.