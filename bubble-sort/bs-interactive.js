const array = [7, 2, 9, 4, 1];
let i = 0;
let j = 0;

document.querySelector('.btn').addEventListener('click', outerIteration);

function outerIteration() {
    if (i !== array.length - 1) {
        console.log('i:' + i);

        inderIteration();
    }

    if (i === array.length - 1) {
        console.log('sorting is finished');
        console.log('sorted array: ' + array);
    }
}

function inderIteration() {
    console.log('j:' + j);

    if (j !== array.length - i - 1) {
        if (array[j] > array[j + 1]) {
            [array[j + 1], array[j]] = [array[j], array[j + 1]];
        }
        j++;
        if (j === array.length - i - 1) {
            console.log('j === array.length - i - 1');

            i = i + 1;
            j = 0;
        }
    }
}

//
