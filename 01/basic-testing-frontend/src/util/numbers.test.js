import { describe, it, expect } from "vitest";
import { transformToNumber } from "./numbers";

describe("test: transformToNumber unit", () => {
  it("should return number if value is number", () => {
    const value = 10.3;
    const expected = +value;

    const result = transformToNumber(value);

    expect(result).toBe(expected);
  });

  it("should return number if value is numeric string", () => {
    const value = "10.3";
    const expected = +value;

    const result = transformToNumber(value);
    // typeof NaN === 'number' 이므로 toBeTypeOf로는 타입 체크 불가능
    // expect(result).toBeTypeOf('number');
    expect(result).toBe(expected);
  });

  it("should return NaN if value is neither number nor numeric string(non-transformable)", () => {
    const v1 = {test: 'hello'};
    const v2 = "invalid";

    const r1 = transformToNumber(v1);
    const r2 = transformToNumber(v2);

    expect(r1).toBeNaN();
    expect(r2).toBeNaN();
  });

  it("should return NaN if no argument passed", () => {
    // undefined을 전달하는 것과 동일한 효과
    const result = transformToNumber();

    expect(result).toBeNaN();
  });

  it("should throw error if typeof argument === \'symbol\'", () => {
    const value = Symbol('invalid');
    const targetFn = () => {
      const result = transformToNumber(value);
    }
    expect(targetFn).toThrow();
  })
});