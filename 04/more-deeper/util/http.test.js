import { vi, describe, it, expect, afterEach } from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';

const fetchMockResult = { test: 'test' };
const fetchMock = vi.fn();

const rejectMessage = 'body is not a string';

fetchMock.mockImplementation((URL, config) => {
  return new Promise((resolve, reject) => {
    if (typeof config.body !== 'string') {
      return reject(rejectMessage);
    }

    const resolveObj = {
      json: () => new Promise((resolve, reject) => {
        resolve(fetchMockResult);
      }),
      ok: true
    };

    resolve(resolveObj);
  });
});
vi.stubGlobal('fetch', fetchMock)

describe('sendDataRequest func', () => {
  afterEach(() => {
    fetchMock.mockClear();
  });

  //mockimplOnce
  it('should throw HttpError if fail to fetch', async () => {
    fetchMock.mockImplementationOnce((URL, config) => {
      return new Promise((resolve, reject) => {
        const rejectObj = {
          json: () => new Promise((resolve, reject) => {
            resolve(fetchMockResult);
          }),
          ok: false // 로직에 관련된 부분
        };
        resolve(rejectObj);
      });
    });
    const input = '';

    await expect(sendDataRequest(input)).rejects.toThrow(HttpError);
  });

  it('should return data if success fetch', async () => {
    const input = '';
    const expected = fetchMockResult;

    const result = await sendDataRequest(input);

    expect(result).toEqual(expected);
  });


  it('should return any available response data', async () => {
    const input = { a: 'b' };
    let errorMessage = '';
    try {
      await sendDataRequest(input);
    } catch (error) {
      errorMEssage = error;
    }
    expect(errorMessage).not.toBe(rejectMessage);
    expect(sendDataRequest(input)).not.rejects.toThrow(rejectMessage);
  }); // resolve / reject와 not은 잘 매칭되지 않을 수 있다
})