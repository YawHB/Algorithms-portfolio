import { binarySearch, compare, stringcomparefunction, namecomparefunction } from './binarySearch.js';
import { values, persons, ordliste } from './searchData.js';

// const result = binarySearch(25, values);
//const result = binarySearch(25, values, compare);
// const result = binarySearch('andedam', ordliste, stringcomparefunction);
const result = binarySearch('Ron Weasley', persons, namecomparefunction);
console.log(`The item is at index: ${result}`);
