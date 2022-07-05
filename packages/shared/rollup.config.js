import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { babel } from '@rollup/plugin-babel';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        sourcemap: true,
        dir: 'dist',
        preserveModules: true,
      },
      {
        format: 'esm',
        sourcemap: true,
        dir: 'dist',
        preserveModules: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', declaration: true }),
      scss({
        processor: () => postcss([autoprefixer()]),
        includePaths: [path.join(__dirname, '../../node_modules/'), 'node_modules/'],
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: /node_modules/,
        extensions: ['.js', '.ts', '.tsx'],
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/cjs/index.d.ts', format: 'esm' }],
    external: [/\.scss$/],
    plugins: [dts()],
  },
];
