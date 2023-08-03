import { describe, expect, it } from 'vitest';
import { add } from './math.js';
describe("test: math.js", () => {
  it("should summarize all values in array", () => {
    const result = add([1,2,3,4,5,6,7,8,9,10]);
    expect(result).toBe(55);
  })
  it("add 1 + 2 = 3", () => {
    const result = add([1, 2]);

    expect(result).toEqual(3);
  });
  it("send empty array = 0", () => {
    const result = add([]);
    expect(result).toEqual(0);
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