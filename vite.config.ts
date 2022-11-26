import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: './build',
  },
  resolve: {
    alias: {
      '@assets': `${__dirname}/src/assets/`,
      '@components': `${__dirname}/src/components/`,
      '@libs': `${__dirname}/src/libs/`,
      '@routes': `${__dirname}/src/routes/`,
    },
  },
  server: {
    open: true,
  },
});
