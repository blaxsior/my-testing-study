import { describe, it, expect } from "vitest";
import { validateNumber, validateStringNotEmpty } from './validation.js';

describe("validateStringNotEmpty func", () => {
  it("should pass if length of string is not empty", () => {
    const value = 'invalid';

    const targetFn = () => {
      validateStringNotEmpty(value)
    };

    expect(targetFn).not.toThrow(/Invalid input/);
  });

  it("should throw error if string consists of white space", () => {
    const v1 = ' \t\n';
    const v2 = '';

    const targetFn1 = () => validateStringNotEmpty(v1);
    const targetFn2 = () => validateStringNotEmpty(v2);

    expect(targetFn1).toThrow(/Invalid input/);
    expect(targetFn2).toThrow(/Invalid input/);
  });

  it("should throw error(trim) if input is not string", () => {
    const values = [{}, Symbol('invalid'), [1, 2], null];

    const targetFn = (idx) => {
      return () => {
        validateStringNotEmpty(values[idx]);
      }
    }
    expect(targetFn(0)).toThrow(/trim/);
    expect(targetFn(1)).toThrow(/trim/);
    expect(targetFn(2)).toThrow(/trim/);
    expect(targetFn(3)).toThrow(/trim/);
  })
});

describe("validateNumber func", () => {
  it("should throw error if argument is string", () => {
    const v1 = 'invalid';
    const v2 = '13';
    
    const validateNonNumericStr = () => validateNumber(v1);
    const validateNumericStr = () => validateNumber(v2);

    expect(validateNonNumericStr).toThrow();
    expect(validateNumericStr).toThrow();

  });

  it("should throw error if argument is not number-transformable", () => {
    const values = [{}, Symbol('invalid'), [1, 2]];

    const validateObj = () => validateNumber(values[0]);
    // symbol의 경우 NaN 비교 자체가 에러남
    const validateSymbol = () => validateNumber(values[1]);
    const validateArr = () => validateNumber(values[2]);

    expect(validateObj).toThrow();
    expect(validateSymbol).toThrow();
    expect(validateArr).toThrow();
  });

  it("should throw error if argument is null", () => {
    const value = null;

    const validateNull = () => validateNumber(value);
    expect(validateNull).toThrow();
  })

  it("should pass if typeof argument is number", () => {
    const value = 0;

    const validateNum = () => validateNumber(value);

    expect(validateNum).not.toThrow();
  });
});