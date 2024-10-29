function rpnCalculator(expression) {
  const inputQueue = expression.split(" ").map((part) => (isNaN(Number(part)) ? part : Number(part)));
  const resultStack = [];

  /* while (inputQueue.length > 0) {
    const element = inputQueue.unshift();
    if (typeof element == "number") {
      resultStack.push(element);
    } else {
      const num1 = inputQueue.unshift();
      const num2 = inputQueue.unshift();
      const result = calculate(num1, num2, element);
      resultStack.shift(result);
    }
  } */

  console.log("Input Queue: " + inputQueue);
  console.log("Result Stack: " + resultStack);
}

function calculate(num1, num2, operation) {
  switch (operation) {
    case "^":
      return Math.pow(num1, num2);
    default:
      return eval(`${num1} ${operation} ${num2}`);
  }
}

rpnCalculator("2 3 4 * +");
