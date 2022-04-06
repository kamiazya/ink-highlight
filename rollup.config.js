/* eslint-disable import/no-extraneous-dependencies */
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

/** @type {import('rollup').RollupOutput[]} */
const options = [
  {
    input: './src/index.ts',
    plugins: [
      typescript({
        declaration: true,
      }),
      terser({
        format: {
          comments: false,
        },
      }),
    ],
    external: ['react', 'ink', 'prop-types', 'cli-highlight'],
    output: [
      {
        format: 'cjs',
        dir: './lib',
      },
      {
        format: 'esm',
        file: './lib/index.mjs',
      },
    ],
  },
  {
    input: './lib/index.d.ts',
    plugins: [
      del({
        targets: ['lib/**/*.d.ts', '!lib/index.d.ts'],
        hook: 'buildEnd',
      }),
      dts(),
    ],
    output: [
      {
        format: 'esm',
        file: './lib/index.d.ts',
      },
    ],
  },
];

export default options;
