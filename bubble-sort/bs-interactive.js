let array = [];
let sortedElements = [];
//"i" og "j" holder styr på vores iterationer.
let i = 0;
let j = 0;

//Giver et klik event på knappen.
const container = document.querySelector('.array-container');
const btnSubmit = document.querySelector('#btn-submit');
document.querySelector('.btn-next').addEventListener('click', outerIteration);
btnSubmit.addEventListener('click', submitForm);

function submitForm(event) {
    event.preventDefault();
    const arrayLengthInput = document.querySelector('#array-length').value;
    array = generateArrayFromInput(arrayLengthInput);
    reRenderArray();
}

//reRenderArray laver dynamisk html, ved at vise det nuværende state sorteringen er nået til.
reRenderArray();

function showArray(element, index) {
    let arrayIsSorted = isSorted(array);

    //Vores ternary operator gør hele arrayet grønt hvis arrayet er sorteret, ved at bruge css klassen "arraySorted"
    const html = /*html*/ `

        <div class="box ${arrayIsSorted ? 'arraySorted' : ''}  ${sortedElements.includes(index) ? 'sorted' : ''} ">${element}</div>
    
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
    const boxes = document.querySelectorAll('.box');

    //Sammenligner nuværende og næste element. "- i" sørger for at dekrementere arrayet med i for hvert klik, så det ikke tjekker de sortede elementer igen
    if (j !== array.length - i - 1) {
        if (array[j] > array[j + 1]) {
            boxes[j].classList.add('fadeOut');
            boxes[j + 1].classList.add('fadeOut');

            setTimeout(() => {
                //Bytter om på to elementers placeringer med aray destructuring - Gør præcis det samme som at have en temp variabel. Legede bare lidt :)
                [array[j + 1], array[j]] = [array[j], array[j + 1]];

                // Fjern fadeOut og lookingAt klasserne, og opdater array-visningen
                boxes[j].classList.remove('lookingAt', 'fadeOut');
                boxes[j + 1].classList.remove('lookingAt', 'fadeOut');

                reRenderArray();
            }, 500);
        } else {
            j++;
            //Opdaterer arrayet efter hver klik/sammenligning
            reRenderArray();
        }
        //Hvis j er har sammenlignet nuværende med næste hele arrayet igennem, start forfra.
        if (j === array.length - i - 1) {
            console.log('increase i: ' + i);
            sortedElements.push(array.length - i - 1);
            console.log('sorted elements: ' + sortedElements);

            // const boxes = document.querySelectorAll('.box');
            // boxes[array.length - i - 1].classList.remove('lookingAt');
            // boxes[array.length - i - 1].classList.add('sorted');

            //boxes[array.length - i].classList.add('.lookingAt');

            i = i + 1;
            j = 0;

            console.log('i increased: ' + i);
            reRenderArray();
        }
    }
    console.log('array: ' + array);
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
// 1. Lav form til array generation med enten 5,10 eller 15 elementer
// 2. ved submit skal alle talene pushes ind i et array
// 3. send dette array til globalt array

*/

//Når jeg klikker next knappen, skal vi ikke blot få den lilla farve på de to elementer vi vi kigger på, de skal også sammenlignes
//når to elementer fader ud og bytter om skal de også fade ind igen

//2. Swap skal have fade effekt
//3. Centrer diven med tal og knap */
