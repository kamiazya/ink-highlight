import React, { FC, useContext } from 'react';
import PropTypes from 'prop-types';
import { highlight } from 'cli-highlight';
import { HighlightOptions, HighlightOptionsContext } from './HighlightOptionsContext';
import { HighlightThemeContext } from './HighlightThemeContext';

export type Props = {
  code: string;
} & HighlightOptions;

export const Highlight: FC<Props> = ({ code, ...option }) => {
  const theme = useContext(HighlightThemeContext);
  const contextOption = useContext(HighlightOptionsContext);
  const language = option.language !== undefined ? option.language : contextOption.language;
  const ignoreIllegals = option.ignoreIllegals !== undefined ? option.ignoreIllegals : contextOption.ignoreIllegals;
  const continuation = option.continuation !== undefined ? option.continuation : contextOption.continuation;
  const languageSubset = option.languageSubset !== undefined ? option.languageSubset : contextOption.languageSubset;

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
