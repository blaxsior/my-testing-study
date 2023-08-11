import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data.js';

describe('generateReportData func', () => {
  it('should execute logFn if provided', () => {
    const spyLogFn = vi.fn();
    generateReportData(spyLogFn);

    expect(spyLogFn).toBeCalled();
  });
});