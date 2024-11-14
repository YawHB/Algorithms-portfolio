let array = [];
//"i" og "j" holder styr på vores iterationer.
let i = 0;
let j = 0;

//Giver et klik event på knappen.
document.querySelector('.btn').addEventListener('click', outerIteration);
const container = document.querySelector('.array-container');
const btnSubmit = document.querySelector('#btn-submit');
btnSubmit.addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();
    console.log('inside submitForm');

    const arrayLengthInput = document.querySelector('#array-length').value;
    console.log(arrayLengthInput);

    array = generateArrayFromInput(arrayLengthInput);

    console.log(array);

    console.log('array: ' + array);
    outerIteration(array);
}

//reRenderArray laver dynamisk html, ved at vise det nuværende state sorteringen er nået til.
reRenderArray();

function showArray(element) {
    let arrayIsSorted = isSorted(array);

    //Vores ternary operator gør hele arrayet grønt hvis arrayet er sorteret, ved at bruge css klassen "arraySorted"
    const html = /*html*/ `

        <div class="box ${arrayIsSorted ? 'arraySorted' : ''}">${element}</div>
    
    `;
    container.insertAdjacentHTML('beforeend', html);
    const boxes = document.querySelectorAll('.box');

    //Giver de 2 elementer vi sammenligner, en grim, lilla farve
    if (boxes[j] && boxes[j + 1]) {
        boxes[j].classList.add('lookingAt');
        boxes[j + 1].classList.add('lookingAt');
    }
}

function outerIteration() {
    //Looper igennem
    if (i !== array.length - 1) {
        inderIteration();
    }

    if (i === array.length - 1) {
        // console.log('sorting is finished');
        // console.log('sorted array: ' + array);
    }
}

function inderIteration() {
    //Sammenligner nuværende og næste element. "- i" sørger for at dekrementere arrayet med i for hvert klik, så det ikke tjekker de sortede elementer igen
    if (j !== array.length - i - 1) {
        if (array[j] > array[j + 1]) {
            //Bytter om på to elementers placeringer med aray destructuring - Gør præcis det samme som at have en temp variabel. Legede bare lidt :)
            [array[j + 1], array[j]] = [array[j], array[j + 1]];
        }
        j++;
        //Opdaterer arrayet efter hver klik/sammenligning
        reRenderArray();
        //Hvis j er har sammenlignet nuværende med næste hele arrayet igennem, start forfra.
        if (j === array.length - i - 1) {
            i = i + 1;
            j = 0;
        }
    }
    console.log('array: ' + array);
    reRenderArray();
}

function reRenderArray() {
    container.innerHTML = '';
    array.forEach(showArray);
}

//? Helper functions
//Denne funktion returnerer true hvis arrayet er sorteret. ellers returnerer den false
function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) return false;
        console.log('element: ' + array[i]);
    }
    return true;
}

function generateArrayFromInput(arrayLength) {
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
        const randomGeneratedNumber = Math.floor(Math.random() * 50);
        array.push(randomGeneratedNumber);
    }
    console.log(array);
    return array;
}
/* 
1. Lav form til array generation med enten 5,10 eller 15 elementer
2. ved submit skal alle talene pushes ind i et array
3. send dette array til 


*/

// 1. Bruger skal kunne generere et random array på x antal tal.
//2. Swap skal have fade effekt
//3. Centrer diven med tal og knap */
