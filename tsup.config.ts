import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  target: 'node18',
  platform: 'node',
  bundle: true,
  clean: true
  // dts: true,
  // watch: true,
  // treeshake: true,
});
