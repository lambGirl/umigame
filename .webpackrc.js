var path =  require("path")
export default {
    publicPath: '/game/static/',

    extraBabelPresets: [
      ["@babel/preset-stage-0", { "decoratorsLegacy": true }]
    ],
    alias:{
        assets:path.resolve(__dirname,'src/assets/'),
    },
    "proxy": {
        "/api": {
            "target": "http://192.168.1.107:5000/api",
            "changeOrigin": true,
            "pathRewrite": { "^/api" : "" }
        }
    },
}
