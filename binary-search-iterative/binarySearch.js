'use strict';

export function binarySearch(target, values, compfunc) {
    let minIndex = 0;
    let maxIndex = values.length - 1;
    let iterationCount = 0;

    if (compfunc == undefined) {
        compfunc = compare;
    }
    while (minIndex <= maxIndex) {
        let midIndex = Math.floor((maxIndex + minIndex) / 2);
        let c = compfunc(target, values[midIndex]);

        if (c === 0) {
            console.log(`iteration count: ${iterationCount++} `);
            return midIndex;
        }
        if (c > 0) {
            minIndex = midIndex + 1;
            console.log(`iteration count: ${iterationCount++} `);
        }
        if (c < 0) {
            maxIndex = midIndex - 1;
            console.log(`iteration count: ${iterationCount++} `);
        }
    }
    return -1;
}

export function compare(target, currentGuess) {
    return target - currentGuess;
}

export function stringcomparefunction(target, currentGuess) {
    return target.localeCompare(currentGuess, 'da');
}

export function namecomparefunction(target, currentGuess) {
    return target.localeCompare(currentGuess.name, 'en');
}
