import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';

export default {
  input: 'index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',    
    name: 'FBLibrary',
    sourcemap: true,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      antd: 'antd'
    }
  },
  onwarn: function(warning, warn) {
    if (warning.message.includes('use client')) {
      return;
    }
    warn(warning);
  },  
  external: ['react', 'react-dom', 'antd'],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
    }),
    terser(),
    postcss({
      extensions: ['.css'],
    }),
  ]
};
