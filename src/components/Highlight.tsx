import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'ink';
import { highlight } from 'cli-highlight';

type Props = {
  code: string;
  language?: string;
};

const Highlight: FC<Props> = ({ code, language }) => {
  const highlighted = highlight(code, {
    language,
  });
  return <Box>{highlighted}</Box>;
};

Highlight.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
};

Highlight.defaultProps = {
  language: undefined,
};

export default Highlight;
