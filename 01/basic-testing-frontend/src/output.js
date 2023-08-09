import { parseStrsToNums } from "./parser.js";
import { add } from "./math.js";

export function generateResultText(result) {
  let resultText = '';

  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }
  return result;
}

export function generateSumResult(numberInputs) {
  let result = '';
  try {
    const numbers = parseStrsToNums(numberInputs)
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}

export function outputResult(resultText) {
  const output = document.getElementById('result');
  output.textContent = resultText;
}