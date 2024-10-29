import { Stack } from './stack.js';

const input = '1 + 2 - 6 / 3';
const precedence = {
    '^': 3,
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
};

function ShuntingConverter(input) {
    //console.log(input);

    const output = new Stack();
    const operator = new Stack();

    const inputArray = input.split(' ');
    // console.log(inputArray);
    for (let i = 0; i < inputArray.length; i++) {
        const char = inputArray[i];
        // console.log('Input: ' + char);

        if (Number(char)) {
            // console.log('We push ' + char + ' into output');
            output.push(char);

            //console.log(output);
        }
        if (operator.peek() == undefined) {
            console.log('Operator stack is empty, pushing first operator:', char);
            operator.push(char);
            console.log('Operator stack after push:', operator); // Debugger status af operator-stack her
        } else {
            // DER GÅR NOGET GALT MELLEM HER:
            if (precedence[char] > precedence[operator.peek()]) {
                //Insterts the new operator in the opertor stack
                // console.log('We push ' + inputArray[i] + ' to operator');
                operator.push(char);
            } else {
                // Removes the operator from operator stack and add to output stack
                // console.log('We pop operator and push to output');
                const operatorTail = operator.pop();
                // console.log('pop this' + operatorTail.data);
                output.push(operatorTail.data);

                // console.log('We push ' + inputArray[i] + ' to operator');
                operator.push(char);
                // console.log('operator down below');
                // console.log(operator);
            }
        }

        // OG HER
    }
    // console.log('Current output stack:', output);
    // console.log('Current operator stack:', operator);
    //console.log(output);

    // console.log('after the flip: ', output);

    while (operator.getSize() > 0) {
        // console.log('Current size:', operator.getSize());
        const operatorTail = operator.pop().data;
        // console.log('op: ' + operatorTail);
        output.push(operatorTail); // Uncomment to push to output
    }

    // stacks after loop
    // console.log(output);
    // console.log(operator);

    // new stack
    const results = new Stack();

    // Iterates output stack and inserts into result stack
    for (let i = output.getSize(); i > output.getSize(); i--) {
        const node = output.getIndex(i);
        // console.log("node to push" + node);
        results.push(node.data);
    }
    // console.log(results);

    let restulString = '';
    for (let i = 0; i < results.getSize(); i++) {
        // console.log('itt ' + i);
        const node = results.getIndex(i);
        const nodeData = node.data;
        // console.log(nodeData);
        restulString += nodeData + ' ';
    }
    // console.log('ResultString: ' + restulString);
    return restulString;
}
const restulString = ShuntingConverter(input);

// --------------------------- CALCULATOR ---------------------------------------------------- //

// Takes a stack and returns a number.
function rpnCalculator(expression) {
    // console.log('Calculator Running');
    const inputQueue = expression.split(' ').map((part) => (isNaN(Number(part)) ? part : Number(part)));
    let resultStack = [];

    // console.log('impitQueue ' + inputQueue);

    for (const element of inputQueue) {
        // const element = inputQueue.unshift();
        // console.log('element of input: ', element);
        if (typeof element == 'number') {
            resultStack.push(element);
        } else {
            const num1 = resultStack[0];
            const num2 = resultStack[1];
            // console.log('num1 ' + num1 + ' num2 ' + num2 + ' operator ' + element);
            const result = calculate(num1, num2, element);
            resultStack = [];
            // resultStack.pop();
            // resultStack.pop();
            resultStack.push(result);
            // console.log('resstack ' + resultStack);
        }
    }
    // console.log('Input Queue: ' + inputQueue);
    // console.log('Result Stack: ' + resultStack);
}

function calculate(num1, num2, operation) {
    // console.log('calculate: ' + num1 + operation + num2);
    switch (operation) {
        case '^':
            return Math.pow(num1, num2);
        default:
            const res = eval(`${num1} ${operation} ${num2}`);
            // console.log(res);
            return res;
    }
}

rpnCalculator('1 2 3 + *');

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
