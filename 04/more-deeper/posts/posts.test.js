import { describe, it, expect } from "vitest";
import { extractPostData } from "./posts";

describe("extractPostData func", () => {
  it('should extract data from input formdata (title, content)', () => {
    const testTitle = 'testTitle';
    const testContent = 'testContent';
    // local stub 만들어서 사용하기
    // const formData = {
    //   title: testTitle,
    //   content: testContent,
    //   get(identifier) {
    //     return this[identifier]
    //   }
    // };
    const formData = new FormData();
    formData.set('title', testTitle);
    formData.set('content', testContent);

    const data = extractPostData(formData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  })
})