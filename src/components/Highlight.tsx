import React, { FC, useContext } from 'react';
import PropTypes from 'prop-types';
import { highlight } from 'cli-highlight';
import { HighlightOptions, HighlightOptionsContext } from './HighlightOptionsContext';
import { HighlightThemeContext } from './HighlightThemeContext';

export type Props = {
  code: string;
} & HighlightOptions;

export const Highlight: FC<Props> = ({ code, ...propOption }) => {
  const theme = useContext(HighlightThemeContext);
  const contextOption = useContext(HighlightOptionsContext);

  const language = propOption.language ?? contextOption.language;
  const ignoreIllegals = propOption.ignoreIllegals ?? contextOption.ignoreIllegals;
  const continuation = propOption.continuation ?? contextOption.continuation;
  const languageSubset = propOption.languageSubset ?? contextOption.languageSubset;

  return (
    <>
      {highlight(code, {
        language,
        ignoreIllegals,
        continuation,
        languageSubset,
        theme,
      })}
    </>
  );
};

Highlight.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
  ignoreIllegals: PropTypes.bool,
  continuation: PropTypes.any,
  languageSubset: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Highlight.defaultProps = {
  language: undefined,
  ignoreIllegals: undefined,
  continuation: undefined,
  languageSubset: undefined,
};
