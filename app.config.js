module.exports = {
  title: "记账",
  appName: "account_bill_web", //根目录名称
  port: 3004,
  autoOpen: false, //启动本地是否自动重启,默认不启动
  alias: {}, //目录别名如"@"表示src目录,"components"表示src/components目录，"pages"表示src/pages,"assets"表示src/assets
  analyzer: false, //打包大小监听
  proxy: {
    "/tigzz_api": {
      target: "http://172.16.41.149:9090",
      pathRewrite: { "^/tigzz_api": "" },
    },
  },
};
