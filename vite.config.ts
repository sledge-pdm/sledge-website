import { ecsstatic } from '@acab/ecsstatic/vite';
import path from 'path';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import solidPlugin from 'vite-plugin-solid';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasmPlugin from 'vite-plugin-wasm';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    ecsstatic(),
    solidPlugin(),
    tsconfigPaths(),
    nodePolyfills({ include: ['process'], globals: { global: true, process: true } }),
    wasmPlugin(),
    topLevelAwait(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  publicDir: './public',
  optimizeDeps: {
    exclude: [
      '@sledge/core',
      '@sledge/theme',
      '@sledge/ui',
    ]
  },
  resolve: {
    alias: {
      '~': path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, '/public/assets'),
    }
  }
});
