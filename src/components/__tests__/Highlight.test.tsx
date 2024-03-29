import React from 'react';
import { render } from 'ink-testing-library';
import { wrap } from 'jest-snapshot-serializer-raw';
import { Highlight, Props } from '../Highlight';

describe('Highlight Component', () => {
  test.each<Props>([
    { code: 'SELECT * FROM users;', language: 'sql' },
    { code: "console.log('Hello world!!')", language: 'javascript' },
    { code: "console.log('Hello world!!')", language: 'javascript', languageSubset: ['typescript'] },
    { code: 'print "Hello world!"', ignoreIllegals: false, language: 'python' },
    { code: '<php?\n echo "Hello world!";', language: 'php' },
  ])('How cli-highlight is called', ({ code, ...option }) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { lastFrame } = render(<Highlight code={code} {...option} />);
    expect(wrap(lastFrame() as string)).toMatchSnapshot();
  });

  test('Change code and language', () => {
    const { lastFrame, rerender } = render(<Highlight code="SELECT * FROM users;" language="sql" />);
    expect(wrap(lastFrame() as string)).toMatchSnapshot();

    rerender(<Highlight code="console.log('Hello world!!')" language="js" />);
    expect(wrap(lastFrame() as string)).toMatchSnapshot();
  });
});
