import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';

const cleanDistFolder = del({ targets: 'dist/*' });
const publishTSConfig = { src: 'src/tsconfig.base.json', dest: 'dist' };

export default [
  {
    input: 'src/esconfig.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
      },
    ],
    plugins: [
      copy({
        targets: [publishTSConfig],
      }),

      cleanDistFolder,
    ],
  },
  {
    input: 'src/tsconfig.base.json',
    output: [
      {
        file: 'dist/tsconfig-cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/tsconfig-bundle.js',
        format: 'esm',
      },
    ],
    plugins: [
      json({
        compact: true,
      }),
    ],
  },
];
