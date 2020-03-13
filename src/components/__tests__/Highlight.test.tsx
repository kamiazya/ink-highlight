import React from 'react';
import { render } from 'ink-testing-library';
import { wrap } from 'jest-snapshot-serializer-raw';
import { Highlight } from '../Highlight';

describe('Highlight Component', () => {
  test.each([
    ['SELECT * FROM users;', 'sql'],
    ["console.log('Hello world!!')", 'js'],
    ["console.log('Hello world!!')", undefined],
  ])('How cli-highlight is called', (code, language) => {
    const { lastFrame } = render(<Highlight code={code} language={language} />);
    expect(wrap(lastFrame())).toMatchSnapshot();
  });

  test('Change code and language', () => {
    const { lastFrame, rerender } = render(<Highlight code="SELECT * FROM users;" language="sql" />);
    expect(wrap(lastFrame())).toMatchSnapshot();

    rerender(<Highlight code="console.log('Hello world!!')" language="js" />);
    expect(wrap(lastFrame())).toMatchSnapshot();
  });
});
