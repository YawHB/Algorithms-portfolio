const array = [7, 2, 9, 4, 1];
let i = 0;
let j = 0;

document.querySelector('.btn').addEventListener('click', outerIteration);
const container = document.querySelector('.array-container');

reRenderArray();

function showArray(element) {
    const html = /*html*/ `
    <div class="box">${element}</div>
    
    `;
    container.insertAdjacentHTML('beforeend', html);
    const boxes = document.querySelectorAll('.box');

    if (boxes[j] && boxes[j + 1]) {
        console.log('true');

        boxes[j].classList.add('lookingAt');
        boxes[j + 1].classList.add('lookingAt');
    }
}

function outerIteration() {
    if (i !== array.length - 1) {
        // console.log('i:' + i);

        inderIteration();
    }

    if (i === array.length - 1) {
        // console.log('sorting is finished');
        // console.log('sorted array: ' + array);
    }
}

function inderIteration() {
    //console.log('j:' + j);
    console.log('array: ' + array);

    if (j !== array.length - i - 1) {
        if (array[j] > array[j + 1]) {
            [array[j + 1], array[j]] = [array[j], array[j + 1]];
        }
        j++;
        reRenderArray();
        if (j === array.length - i - 1) {
            i = i + 1;
            j = 0;
        }
    }
}

function reRenderArray() {
    container.innerHTML = '';
    array.forEach(showArray);
}
