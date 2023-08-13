import { describe, it, expect } from 'vitest';
import { HttpError, ValidationError } from './errors.js';

describe('HttpError class', () => {
  it('should have own properties(statusCode, message, data)', () => {
    //arrange
    const testStatus = 1;
    const testMessage = 'test';
    const testData = { test: 'data' };
    //act
    const error = new HttpError(testStatus, testMessage, testData);
    //assert
    expect(error).toHaveProperty('statusCode');
    expect(error).toHaveProperty('message');
    expect(error).toHaveProperty('data');
  });
  // 데이터는 제공되지 않아도 괜찮음
  it('should contain undefined data if no data provided', () => {
    const testStatus = 1;
    const testMessage = 'test';

    const error = new HttpError(testStatus, testMessage);

    expect(error.statusCode).toBe(testStatus);
    expect(error.message).toBe(testMessage);
    expect(error.data).toBeUndefined();
  })
});

describe('ValidationError class', () => {
  it('should have own properties(message)', () => {
    const error = new ValidationError('test');

    expect(error).toHaveProperty('message');
  })
})