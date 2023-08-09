import { describe, it, expect } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText func", () => {
  it("should return string no matter which value is passed in", () => {
    const v1 = 10;
    const v2 = 'invalid';
    const v3 = '13';
    const v4 = false;
    const v5 = null;

    const r1 = generateResultText(v1);
    const r2 = generateResultText(v2);
    const r3 = generateResultText(v3);
    const r4 = generateResultText(v4);
    const r5 = generateResultText(v5);

    expect(r1).toBeTypeOf('string');
    expect(r2).toBeTypeOf('string');
    expect(r3).toBeTypeOf('string');
    expect(r4).toBeTypeOf('string');
    expect(r5).toBeTypeOf('string');
  }); // 반드시 문자열을 반환해야 함
  it("should return error message if input is 'invalid'", () => {
    const input = 'invalid';
    const expectedRegex = /invalid input/i;

    const result = generateResultText(input);
    expect(result).toMatch(expectedRegex);
  });

  it("should return empty string if input is 'no-calc'", () => {
    const input = 'no-calc';
    const expected = '';

    const result = generateResultText(input);
    expect(result).toBe(expected);
  });

  it("should return 'Result: value' style if input is string", () => {
    const input = '13';

    const result = generateResultText(input);
    expect(result).toContain(input);
  });

  it("should return a string that contains number if input is number", () => {
    const input = 1;

    const result = generateResultText(input);
    expect(result).toContain(input.toString());
  })
});