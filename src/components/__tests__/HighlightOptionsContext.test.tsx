import React from 'react';
import { wrap } from 'jest-snapshot-serializer-raw';
import { render } from 'ink-testing-library';
import { Highlight, Props } from '../Highlight';
import { HighlightOptions, HighlightOptionsContext } from '../HighlightOptionsContext';

describe('HighlightOptionsContext', () => {
  test.each<{ attributes: Props; context: HighlightOptions }>([
    { attributes: { code: 'SELECT * FROM users;' }, context: { language: 'sql' } },
    { attributes: { code: "console.log('Hello world!!')", language: 'javascript' }, context: { language: 'sql' } },
    {
      attributes: { code: "console.log('Hello world!!')", language: 'javascript', languageSubset: ['typescript'] },
      context: {},
    },
    { attributes: { code: 'print "Hello world!"', language: 'python' }, context: { ignoreIllegals: false } },
    { attributes: { code: '<php?\n echo "Hello world!";', language: 'php' }, context: {} },
  ])('How cli-highlight is called', ({ attributes, context }) => {
    const { lastFrame } = render(
      <HighlightOptionsContext.Provider value={context}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Highlight {...attributes} />
      </HighlightOptionsContext.Provider>,
    );
    expect(wrap(lastFrame() as string)).toMatchSnapshot();
  });
});
