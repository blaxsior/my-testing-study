import { describe, it, expect } from 'vitest';
import { validateNotEmpty } from './validation.js';
import { ValidationError } from './errors.js';

describe("validateNotEmpty func", () => {
  const errorMessage = 'Validation Error';

  it("should be ok if text is string(length > 0)", () => {
    const text = 'test';

    const targetFn = () => { validateNotEmpty(text, errorMessage) };
    expect(targetFn).not.toThrow();
  });

  it("should throw ValidationError if text is empty string", () => {
    const text = '';

    const targetFn = () => { validateNotEmpty(text, errorMessage) };
    expect(targetFn).toThrow(ValidationError);
  });
  
  // white space로 구성되는 경우 필요 없는 문장 -> Error 반환
  it("should throw ValidationError if text consists of white space", () => {
    const text = ' \t\n';

    const targetFn = () => { validateNotEmpty(text, errorMessage) };
    expect(targetFn).toThrow(ValidationError);
  });


  it("should throw ValidationError if typeof text is not \'string\'", () => {
    // text 아니면 trim 메서드 / length 프로퍼티 X
    const v1 = 1;
    const v2 = { test: 'test' };
    const v3 = [1];

    const tFn1 = () => { validateNotEmpty(v1, errorMessage) };
    const tFn2 = () => { validateNotEmpty(v2, errorMessage) };
    const tFn3 = () => { validateNotEmpty(v3, errorMessage) };

    expect(tFn1).toThrow();
    expect(tFn2).toThrow();
    expect(tFn3).toThrow();
  });

  // validation 함수가 던지는 에러의 메시지는 인자로 전달한 메시지와 동일
  it('should throw error with the provided error message', () => {
    const text = '';

    const targetFn = () => { validateNotEmpty(text, errorMessage)};

    expect(targetFn).toThrow(errorMessage);
  })
});