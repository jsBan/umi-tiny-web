import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  base: process.env.NODE_ENV === 'production' ? '/prod/' : './',
  // outputPath: process.env.NODE_ENV === 'production' ? '/prod/' : './',
  // publicPath: process.env.NODE_ENV === 'production' ? '/prod/' : './'
});
