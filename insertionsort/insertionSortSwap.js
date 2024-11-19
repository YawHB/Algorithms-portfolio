export function insertionSortSwap(array) {
    for (let i = 1; i < array.length; i++) {
        let k = i - 1;
        let curVal = array[i];

        while (array[k] > curVal && k >= 0) {
            console.log('k: ' + k);

            array[k + 1] = array[k];
            k--;
        }
        array[k + 1] = curVal;
    }
    return array;
}
