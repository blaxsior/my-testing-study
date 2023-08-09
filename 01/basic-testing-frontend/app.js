import { extractFormNumberValues } from './src/parser.js';
import { generateResultText, generateSumResult, outputResult } from './src/output.js';

const form = document.querySelector('form');
// 하나만 틀려도 전부 틀림
// 한 함수 내에 너무 많은 기능이 존재
// 함수 내 각 단계를 분할
function formSubmitHandler(event) {
  event.preventDefault();
  // 입력 단계
  const numberInputs = extractFormNumberValues(form);

  // validating 단계
  const result = generateSumResult(numberInputs);

  // output 메시지 설정 단계
  const resultText = generateResultText(result);

  // output DOM에 반영하는 단계
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
