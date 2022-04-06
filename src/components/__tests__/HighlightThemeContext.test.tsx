import React from 'react';
import { wrap } from 'jest-snapshot-serializer-raw';
import { render } from 'ink-testing-library';
import { Theme } from 'cli-highlight';
import { Highlight } from '../Highlight';
import { HighlightThemeContext } from '../HighlightThemeContext';

describe('HighlightThemeContext', () => {
  test('Theme applied', () => {
    const theme = Object.freeze({ test: true }) as Theme;
    const { lastFrame } = render(
      <HighlightThemeContext.Provider value={theme}>
        <Highlight code="console.log('Hello world!');" />
      </HighlightThemeContext.Provider>,
    );
    expect(wrap(lastFrame() as string)).toMatchSnapshot();
  });
});
