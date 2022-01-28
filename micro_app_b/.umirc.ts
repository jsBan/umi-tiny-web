import { defineConfig, plugin } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  // 配置qiankun
  qiankun: {
    slave:{}
  },
  targets:{
    ie:11
  },

});
