import { validateNumber, validateStringNotEmpty } from "./util/validation.js";
import { transformToNumber } from './util/numbers.js';

export function extractNumbers(formData) {
  const num1Input = formData.get('num1');
  const num2Input = formData.get('num2');

  return [num1Input, num2Input];
}

export function extractFormNumberValues(form) {
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);
  return numberInputs;
}

export function parseStrToNum(numberInput) {
  validateStringNotEmpty(numberInput);
  const number = transformToNumber(numberInput);
  validateNumber(number);
  return number;
}

export function parseStrsToNums(numberInputs) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    const number = parseStrToNum(numberInput);
    numbers.push(number);
  }
  return numbers;
}
