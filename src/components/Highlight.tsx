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
  return (
    <>
      {highlight(code, {
        ...contextOption,
        ...option,
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
