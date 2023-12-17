import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'FBLibrary',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      antd: 'antd'
    }
  },
  external: ['react', 'react-dom', 'antd'],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    terser(),
    postcss({
      extensions: ['.css'],
    }),
  ]
};
