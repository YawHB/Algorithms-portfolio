import { Stack } from './stack.js';
const output = new Stack();
const operator = new Stack();
const input = '1 + 2 - 5';

const precedence = {
    '^': 5,
    '*': 4,
    '/': 3,
    '+': 1,
    '-': 1,
};

function ShuntingConverter(input) {
    const inputArray = input.split(' ');
    console.log(inputArray);
    for (let i = 0; i < inputArray.length; i++) {
        if (Number(inputArray[i])) {
            output.push(inputArray[i]);
        } else {
            console.log('Indside precedence');
            operator.push(inputArray[i]);
            console.log(precedence[operator.peek().data]);

            if (precedence['+'] == precedence[operator.peek().data]) {
            }
        }
    }
    console.log(output);
    console.log(operator);
}

ShuntingConverter(input);

// Step by Step
//1: Definer en ligning  fx: 1+2+5
//2: Lav 2 stacks: en for output(numbers) og operators(operators)
//3: tilføj ligningen til vores ShuntingConverter metode
//4: iterer over hvert element:
//hvis tal, push til outpus stack,
// hvis operator, tjek precedence.
//Hvis den har precedence tilføj den til stacken.
//Hvis operatoren har <= precedens til den forrige, tilføj den forrige operator til output stacken.Derefter tilføj den nuværende operator til operator stacken
//Når arrayet er tomt. tilføj output stacken til vores RPN calculator.
