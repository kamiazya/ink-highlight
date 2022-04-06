import React, { FC, useContext } from 'react';
import { Text } from 'ink';
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
  const languageSubset = option.languageSubset !== undefined ? option.languageSubset : contextOption.languageSubset;

  return (
    <Text>
      {highlight(code, {
        language,
        ignoreIllegals,
        languageSubset,
        theme,
      })}
    </Text>
  );
};

Highlight.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
  ignoreIllegals: PropTypes.bool,
  languageSubset: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Highlight.defaultProps = {
  language: undefined,
  ignoreIllegals: undefined,
  languageSubset: undefined,
};
