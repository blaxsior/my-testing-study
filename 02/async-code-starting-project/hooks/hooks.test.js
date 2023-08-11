import { it, expect, beforeAll, beforeEach, afterAll, afterEach, describe } from 'vitest';

import { User } from './hooks';


describe.concurrent("User class", () => {
  const testEmail = 'test@test.com';
  /**
   * @type { User }
   */
  let user;

  beforeAll(() => {
    user = new User(testEmail);
    // console.log("beforeAll");
  });
  beforeEach(() => {
    user = new User(testEmail);
    // console.log("beforeEach");
  });

  // afterAll(() => {
  //   // console.log("afterAll");
  // });
  // afterEach(() => {
  //   // console.log("afterEach");
  // });

  it('should update the email', () => {
    const newTestEmail = 'test2@test.com';

    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
  });

  it('should have an email property', () => {
    expect(user).toHaveProperty('email');
  });

  it('should store the provided email value', () => {
    expect(user.email).toBe(testEmail);
  });

  it('should clear the email', () => {
    user.clearEmail();

    expect(user.email).toBe('');
  });

  it('should still have an email property after clearing the email', () => {
    user.clearEmail();

    expect(user).toHaveProperty('email');
  });

})

