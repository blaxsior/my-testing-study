// @vitest-environment happy-dom

import { readFile } from 'fs/promises';
import { resolve } from 'path';

import { vi, describe, it, expect, beforeEach } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';

const htmlPath = resolve('index.html');
const htmlTextContent = (await readFile(htmlPath)).toString();

// 맨 위 주석 있으면 아래 코드는 필요 없음
// const window = new Window();
// const document = window.document;

// vi.stubGlobal('document', document);

describe('showError func', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlTextContent);
  });
  it('should add p element on errorContainerElement', () => {
    showError('test');

    const errElement = document.querySelector('#errors');
    const errParagraph = errElement.firstElementChild;
    
    expect(errParagraph).not.toBeNull();
  });

  it('should not be included any element on errorContainerElement at first', () => {
    const errElement = document.querySelector('#errors');
    const errParagraph = errElement.firstElementChild;

    expect(errParagraph).toBeNull();
  });

  it('should output provided message in the error paragraph', () => {
    const errorMessage = 'test message';

    showError(errorMessage);

    const errElement = document.querySelector('#errors');
    const errParagraph = errElement.firstElementChild;
    
    expect(errParagraph).not.toBeNull();
    expect(errParagraph.textContent).toBe(errorMessage);
  })
});
// 장기적으로는 testing library 사용을 권장