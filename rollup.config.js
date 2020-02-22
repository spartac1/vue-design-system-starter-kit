import vue from 'rollup-plugin-vue';

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/design-system.esm.js',
    },
    plugins: [
      vue(),
    ],
  },
  // SSR build.
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/design-system.ssr.js',
    },
    plugins: [
      vue({ template: { optimizeSSR: true } }),
    ],
  },
  // Browser build.
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: 'dist/design-system.js',
    },
    plugins: [
      vue(),
    ],
  },
];
