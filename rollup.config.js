// rollup.config.js
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

export default [
  {
    input: 'components/index.js',
    external: [
      'react',
      'prop-types',
      'sass',
      'classnames',
      'carbon-components',
      'carbon-components-react',
      'carbon-icons',
      'lodash',
    ],
    output: [
      {
        file: 'index.js',
        format: 'cjs',
        globals: {
          react: 'React'
        },
        name: 'prensa-docs'
      }
    ],
    plugins: [ 
      babel({
        exclude: '/node_modules/',
      }),
      json(),
      resolve(),
      sass(),
    ]
  },
];
