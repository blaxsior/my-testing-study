import { describe, it, expect } from "vitest";
import { parseStrsToNums } from "./parser";

describe("parseStrsToNums func", () => {
  it("should return number array if string array provided", () => {
    const numberValues = ['1', '2'];
    const expected = numberValues.map(item => +item);

    const result = parseStrsToNums(numberValues);
    
    expect(result[0]).toBeTypeOf('number');
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it("should throw error if at least one item  in array is empty string", () => {
    const input = ['', 2];

    const targetFn = () => { parseStrsToNums(input) };

    expect(targetFn).toThrow();
  });
});

// describe("parseStrToNum func", () => {
//   it()
// });