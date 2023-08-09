import { extractNumbers } from './src/parser.js';
import {
  validateStringNotEmpty,
  validateNumber,
} from './src/util/validation.js';
import { add } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';

const form = document.querySelector('form');
const output = document.getElementById('result');
// 하나만 틀려도 전부 틀림
// 한 함수 내에 너무 많은 기능이 존재
// 함수 내 각 단계를 분할
function formSubmitHandler(event) {
  event.preventDefault();
  // 입력 단계
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  // validating 단계
  let result = '';
  
  try {
    const numbers = [];
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  // output 메시지 설정 단계
  let resultText = '';

  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }

  // output DOM에 반영하는 단계
  output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
