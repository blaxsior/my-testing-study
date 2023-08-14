import { describe, it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe("generateToken func", () => {
  it("should generate token value", (done) => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch(err) {
        done(err);
      }
    })
  });
});

describe("generateTokenPromise func", () => {
  it("should generate token value", () => {
    const testUserEmail = 'test@test.com';

    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });

  it("should generate token value", async () => {
    const testUserEmail = 'test@test.com';

    const token = await generateTokenPromise(testUserEmail);
    
    expect(token).toBeDefined();
  });

  it("should generate token value", async () => {
    const testUserEmail = 'test@test.com';

    await expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });
});