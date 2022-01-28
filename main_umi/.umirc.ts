import { defineConfig } from 'umi';

export default defineConfig({
  title:'jsban',
  favicon: './img/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/login', component: '@/login/index', name:'登录页面', icon:'WifiOutlined'},
    { path: '/', component: '@/login/index', name:'首页', icon:'WifiOutlined'},
    //注册子路由A
    {
      name:'app1',
      path:"/app1",
      microApp:'app1', //对应上一步注册的name
      icon: 'dashboard',
    },
    // 注册子路由B
    {
      name:'app2',
      path:"/app2",
      microApp:'app2',
      icon: 'AppstoreAddOutlined',
    },
    {
      name:'app3',
      path:"/app3",
      microApp:'app3',
      icon: 'BorderLeftOutlined',
    }
  ],
  fastRefresh: {},// 快速刷新（Fast Refresh），开发时可以保持组件状态，同时编辑提供即时反馈。
   //注册qiankun应用
  qiankun:{
    master:{
      //注册子应用信息
      apps:[
        {
          name:'app1', //唯一 id
          entry: "//localhost:3000", //html entry
        },
        {
          name:'app2',
          entry: "//localhost:2000"
        },
        {
          name:'app3',
          entry: "//localhost:2001"
        }
      ]
    }
  },
  layout:{
    name:'jsban', //产品名称
    locale: true, //是否开启国际化
    logo: './img/logo.jpeg'
  },
  hash: false, // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
  history:{// 配置history类型和配置项
    type:'browser'// 可选browser、hash、memory
  },
  base: '/', // 设置路由前缀，通常用于部署到非根目录
  publicPath: '/' ,//配置 webpack 的publicPath。 当打包时，webpack 会在静态文件路径前面添加 publibPath的值
  // locale:{
  //   // default: 'zh-CN', // 默认语言，当检测不到具体语言时，展示default中指定的语言
  //   // default: 'zh-CN', // 默认语言，当检测不到具体语言时，展示default中指定的语言
  //   antd:false,//开启后，支持antd 国际化
  //   title: false,// 在项目中配置的title及路由中的title 可配置使用国际化key，自动被转成对应的语言的文案
  //   baseNavigator:true,// 开启浏览器语言检测
  //   baseSeparator: '-'// 国家(lang)与 语言(language) 之间的分割符
  // },
  


  // jsSandbox: true, // 是否启用 js 沙箱，默认为 false
  // prefetch: true, // 是否启用 prefetch 特性，默认为 true
});
