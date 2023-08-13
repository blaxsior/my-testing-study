import { describe, it, expect } from 'vitest';
import { HttpError, ValidationError } from './errors.js';

describe('HttpError class', () => {
  it('should have own properties(statusCode, message, data)', () => {
    const error = new HttpError(200, 'test', 'test');

    expect(error).toHaveProperty('statusCode');
    expect(error).toHaveProperty('message');
    expect(error).toHaveProperty('data');
  });
});

describe('ValidationError class', () => {
  it('should have own properties(message)', () => {
    const error = new ValidationError('test');

    expect(error).toHaveProperty('message');
  })
})