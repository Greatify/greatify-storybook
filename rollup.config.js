import terser from '@rollup/plugin-terser';
import baseConfig from './rollup.base.config.js';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts', // Entry point for the library
    output: [
      {
        file: "dist/cjs/index.js", // Output for CommonJS (e.g., main.js)
        sourcemap: true,
        exports: 'named',
      },
      {
        file: "dist/esm/index.js", // Output for ES6 modules 
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom'],
    preserveModules: true,
    plugins: [
      ...baseConfig.plugins,
      terser(),
    ],
  },
  {
    input: 'src/index.ts', // Type Definitions
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
];
