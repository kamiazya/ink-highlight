[![GitHub Action](https://github.com/kamiazya/ink-highlight/workflows/NodeCI/badge.svg)](https://github.com/kamiazya/ink-highlight/actions?workflow=NodeCI) [![npm version](https://badge.fury.io/js/ink-highlight.svg)](https://badge.fury.io/js/ink-highlight) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# ink-highlight

Highlight component for Ink.
Uses ink-highlight for the code syntax highlight on your cli application.

## Installation

The plugin can then be installed using [npm](https://www.npmjs.com/):

[![NPM](https://nodei.co/npm/ink-highlight.png)](https://nodei.co/npm/ink-highlight/)

```bash
# yarn
yarn add ink-highlight
# or npm
npm install ink-highlight
```

## Usage

```tsx
import React from 'react';
import { render } from 'ink';
import { Highlight } from 'ink-highlight';

const code = `SELECT
  \`id\`,
  \`name\`
FROM \`users\`
WHERE
  \`id\` = 1;
`;

render(<Highlight code={code} language="sql" />);
```

## API

### Highlight Component

- **Props**

```ts
type Props = {
  code: string;
  language?: string;
};
```

## License

This software is released under the MIT License, see [LICENSE](./LICENSE).
