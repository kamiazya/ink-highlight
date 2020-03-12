import React from 'react';
import { render } from 'ink';
import { Highlight } from '../src';

const code = `SELECT
  \`id\`,
  \`name\`
FROM \`users\`
WHERE
  \`id\` = 1;
`;

render(<Highlight code={code} language="sql" />);
