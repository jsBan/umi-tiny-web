import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  qiankun:{
    slave:{}
  },
  dva:{
    immer: true,
    hmr: false
  }
});
