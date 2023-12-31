import { describe, expect, it } from 'vitest';
import { add } from './math.js';
describe("add func", () => {
  it("should summarize all values in array", () => {
    // Arrange
    const numbers = [1,2]; // 이유 없이 복잡하게 만들지 마
    const expected = numbers.reduce((a,b) => a + b, 0);

    const result = add(numbers); // Act
    expect(result).toBe(expected); // Assert
  });
  it("should return NaN if at least one of values is not number type", () => {
    const values = [1, 'b'];

    const result = add(values);
    expect(result).toBeNaN();
  });
  it("should calculate correct sum if all elements of array are numeric string", () => {
    const values = ['1', '2'];
    const expected = values.reduce((a,b) => a + +b, 0);

    const result = add(values);
    
    expect(result).toBe(expected);
  })
  it("send empty array = 0", () => {
    const numbers = [];
    const expected = 0;

    const result = add(numbers);
    expect(result).toEqual(expected);
  });
  it("should throw error if no array passed", () => {
    //https://jestjs.io/docs/expect#tothrowerror
    //래핑 안하면 assertion 수행 안됨
    const resultFn = () => {
      const result = add();
    };

    expect(resultFn).toThrow(/not iterable/);
  });
  it("should throw error if argument is not array", () => {
    const resultFn = () => {
      const result = add(13, 12);
    };

    // expect(resultFn).toThrow(TypeError);
    expect(resultFn).toThrow(/is not iterable/);
    // 등장할 클래스 / 문자열(에러 메시지) 정의 가능
  });
});

// toBe: 동등성 비교( ===, 객체든 뭐든 )
// toEqual: 모든 인자가 동일한지 비교(재귀적으로 비교)