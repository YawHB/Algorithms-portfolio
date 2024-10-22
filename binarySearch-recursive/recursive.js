'use strict';

console.log('Hello');

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

function binarySearchRecursive(values, target, min = 0, max = values.length - 1) {
    // let min = 0;
    // let max = values.length - 1;
    let midIndex = Math.floor((max + min) / 2);

    if (min > max) return -1;

    if (target == values[midIndex]) {
        return midIndex;
    }
    if (target > values[midIndex]) {
        return binarySearchRecursive(values, target, midIndex + 1, max);
        //min = midIndex + 1;
    }
    if (target < values[midIndex]) {
        return binarySearchRecursive(values, target, min, midIndex - 1);
        //max = midIndex - 1;
    }
}

const result = binarySearchRecursive(values, 22);
console.log(result);
