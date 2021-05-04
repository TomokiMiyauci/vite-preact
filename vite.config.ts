import preactRefresh from '@prefresh/vite';
import { resolve } from 'path';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  plugins: [preactRefresh()],
  resolve: {
    alias: [{ find: '@', replacement: resolve('src') }],
  },
};

export default config;
