// function insertionSortShift(array) {
//     console.log('array: ' + array);

//     for (let i = 1; i < array.length; i++) {
//         console.log('curr: ' + array[i]);
//         console.log('prev: ' + array[i - 1]);

//         for (let j = i - 1; j >= 0; j--) {
//             if (array[i] < array[j]) {
//                 console.log('swap: ' + array[j] + ' and ' + array[i]);
//                 console.log('i: ' + i);
//                 console.log('j: ' + j);

//                 // console.log('array[i] and array[i - 1]: ' + array[i] + ' ' + array[i - 1]);

//                 let temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//                 i = --i;
//                 console.log('array after swap: ' + array);
//             } else {
//                 console.log('staying: ' + array[j] + ' and ' + array[i]);
//                 console.log('array NO swap: ' + array);
//             }
//         }
//     }
//     return array;
// }

// console.log(insertionSortShift([5, 3, 8, 4, 2]));

// For hvert curr tal i listen fra venstre mod højre:
// - Sammenlign curr med tallet før:
//   - Hvis curr < tallet før, flyt tallet før én plads til højre og gentag sammenligningen.
//   - Hvis curr > tallet før, eller curr når index 0, så har curr fundet sin korrekte plads.
// - Gentag denne process, indtil alle tal i listen er gennemgået

function insertionSortShift(array) {
    for (let i = 1; i < array.length; i++) {
        let x = i;
        for (let j = i - 1; j >= 0; j--) {
            if (array[x] < array[j]) {
                let temp = array[x];
                array[x] = array[j];
                array[j] = temp;
                x = --x;
            }
        }
    }
    return array;
}

//console.log(insertionSortShift([5, 3, 8, 4, 2]));

function insertionSortShift(array) {
    for (let i = 1; i < array.length; i++) {
        let curValue = array[i];

        for (let j = i - 1; j >= 0; j--) {
            if (curValue < array[j]) {
                array[j + 1] == array[j];
                console.log('array: ' + array);
            }
        }
        array[j + 1] = curValue; // Indsæt currentValue på den korrekte plads
    }
    return array;
}

console.log(insertionSortShift([5, 3, 8, 4, 2]));
