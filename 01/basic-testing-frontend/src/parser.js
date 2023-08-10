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

// 다른 함수들을 호출해야 하는 함수
// 다른 함수의 실행 결과에 의해 현재 함수의 성공 여부가 달라짐
// 외부 의존성을 제거하는 방법도 o
// 또는 해당 모듈들에 대한 통합 테스트
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
