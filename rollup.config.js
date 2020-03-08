import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      dir: 'lib',
    },
  ],
  plugins: [typescript(), terser()],
  external: ['react', 'prop-types', 'ink', 'cli-highlight'],
};
