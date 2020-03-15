import sucrase from '@rollup/plugin-sucrase';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      dir: 'lib',
    },
  ],
  plugins: [
    resolve({
      extensions: ['.ts', '.tsx'],
    }),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx', 'typescript', 'imports'],
    }),
    terser(),
  ],
  external: ['react', 'prop-types', 'ink', 'cli-highlight'],
};
