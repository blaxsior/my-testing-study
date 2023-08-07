import { describe, expect, it } from 'vitest';
import { add } from './math.js';
describe("test: math.js", () => {
  it("should summarize all values in array", () => {
    // Arrange
    const numbers = [1,2]; // 이유 없이 복잡하게 만들지 마
    const expected = numbers.reduce((a,b) => a + b, 0);

    const result = add(); // Act
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
    expect(() => {
      const result = add();
    }).toThrow();
  })
});

// toBe: 동등성 비교( ===, 객체든 뭐든 )
// toEqual: 모든 인자가 동일한지 비교(재귀적으로 비교)