# umigame
umi 做的高考小游戏

# 安装,全局安装
$ yarn global add umi # 或者：npm install -g umi

# 启动调试服务器
$ umi dev

# 构建
$ umi build
如果需要打包到某个目录为基准路径需要修改.webpackrc.js
export default {
    publicPath: '/game/static/',    //这里表示打包目录

    extraBabelPresets: [
      ["@babel/preset-stage-0", { "decoratorsLegacy": true }]
    ],
    alias:{
        assets:path.resolve(__dirname,'src/assets/'),
    },
    "proxy": {
        "/api": {
            "target": "http://192.168.1.107:5000/api",      //新增的代理配置
            "changeOrigin": true,
            "pathRewrite": { "^/api" : "" }
        }
    },
}

//页面中修改某个页面中的title，需要修改的是document.title
可以引入这个包 在npm中可以查看相应的用法
react-document-title


