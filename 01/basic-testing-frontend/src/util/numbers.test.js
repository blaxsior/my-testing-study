import { describe, it, expect } from "vitest";
import { transformToNumber } from "./numbers";

describe("test: transformToNumber unit", () => {
  it("should return number if value is number", () => {
    const value = 10.3;
    const expected = 10.3;

    const result = transformToNumber(value);

    expect(result).toBe(expected);
  });

  it("should return number if value is numeric string", () => {
    const value = "10.3";
    const expected = 10.3;

    const result = transformToNumber(value);

    expect(result).toBe(expected);
  });

  it("should return NaN if value is neither number nor numeric string", () => {
    const value = {test: 'hello'};

    const result = transformToNumber(value);

    expect(result).toBeNaN();
  });

  it("should return NaN if no argument passed", () => {

    const result = transformToNumber();

    expect(result).toBeNaN();
  })
});