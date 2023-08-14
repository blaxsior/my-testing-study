import { vi, describe, it, expect, afterEach } from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';

const fetchMockResult = {test: 'test'};
const fetchMock = vi.fn();
fetchMock.mockImplementationOnce((URL, config) => {
  return new Promise((resolve, reject) => {
    resolve({
      json: () => new Promise((resolve, reject) => {
        resolve(fetchMockResult);
      }),
      ok: true
    });
  });
});
fetchMock.mockImplementationOnce((URL, config) => {
  return new Promise((resolve, reject) => {
    resolve({
      json: () => new Promise((resolve, reject) => {
        resolve(fetchMockResult);
      }),
      ok: false
    });
  });
});
vi.stubGlobal('fetch', fetchMock)
// fetchMock.mockImplementationOnce((URL, config) => {
//   return {
//     json: () => new Promise((resolve, reject) => {
//       reject('test');
//     })
//   }
// });

describe('sendDataRequest func', () => {
  afterEach(() => {
    fetchMock.mockClear();
  });

  it('should return data if success fetch', async () => {
    const input = '';
    const expected = fetchMockResult;

    const result = await sendDataRequest(input);

    expect(result).toEqual(expected);
  });

  it('should throw HttpError if fail to fetch', async () => {
    const input = '';

    await expect(sendDataRequest(input)).rejects.toThrow(HttpError);
  })
})