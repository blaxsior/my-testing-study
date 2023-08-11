import { describe, it, expect, vi } from 'vitest';
import writeData from './io';
import { promises as fs } from 'fs';

// 실행하면 호이스팅 되서 자동으로 최상위로 올라감
// 프로덕션 수준에는 영향 X
vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args.at(-1);
      }
    }
  };
});

describe("writeData func", () => {
  // 호출 여부는 알 수 있으나, 파일을 생성하는 사이드이펙트가 존재한다.
  // -> mock 활용하기!
  it("should execute writeFile Method", async () => {
    const testData = 'test';
    const testFilename = 'test2.txt';

    writeData(testData, testFilename);
    // spy function 요구
    expect(fs.writeFile).toBeCalledWith(testFilename, testData); 
  });
  // global mock implementation 기반
  it("should return a promise that resolves to no value if called correctly", async () => {
    const testData = 'test';
    const testFilename = 'test2.txt';

    //단순 비교라 vi.fn 아니더라도 상관 없음
    await expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  });
});
// fs 사용하는 다른 파일에서는 vi.mock 호출 안했다면
// 호출한 놈들보다 먼저 실행되도록 정렬
