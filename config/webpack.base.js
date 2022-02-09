const path = require("path");
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const AppConfig = require("../app.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin"); // react热更新
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";
const resolve = relatedPath => {
  return path.join(__dirname, relatedPath);
};

module.exports = {
  context: resolve("../"),
  entry: {
    main: resolve("../src/main.tsx"),
  },
  output: {
    path: resolve("../dist"),
    filename: isDev ? "js/[name].js" : "js/[name].[contenthash:8].js",
    chunkFilename: isDev ? "js/[contenthash:8].js" : "js/[contenthash:8].js",
    publicPath: "/",
    // 打包前清空输出目录
    clean: isDev ? false : true,
  },
  cache: {
    type: "filesystem", // 使用文件缓存
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".less", ".json"],
    mainFiles: ["index.js", "index.jsx", "index.ts", "index.tsx"],
    modules: ["../node_modules"],
    alias: {
      "@": resolve("../src"),
      components: resolve("../src/components"),
      pages: resolve("../src/pages"),
      assets: resolve("../src/assets"),
      ...(AppConfig.alias || {}),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        include: resolve("../src"),
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
              plugins: [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    absoluteRuntime: false,
                    corejs: 3,
                    helpers: true,
                    regenerator: true,
                    useESModules: false,
                  },
                ],
                [
                  "@babel/plugin-transform-react-jsx",
                  {
                    runtime: "automatic",
                  },
                ],
                // 热更新加载器
                isDev && "react-refresh/babel",
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/i,
        use: [
          isDev
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
              },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: {
                mode: "local",
                localIdentName: "[local]--[hash:base64:5]",
                auto: resourcePath => {
                  return !/(\/|\\)node_modules(\/|\\)|(\/|\\)src(\/|\\)assets/g.test(resourcePath);
                },
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: "asset",
        generator: {
          filename: "img/[hash][ext][query]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 4kb
          },
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "media/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.title": JSON.stringify(AppConfig.title),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: resolve("../public/index.html"),
      favicon: resolve("../public/favicon.ico"),
      hash: false, //防止相同缓存
      inject: true,
      // filename: "index.html",
      templateParameters: {
        title: AppConfig.title || "",
        isdev: process.env.NODE_ENV === "development",
      },
      minify: isDev
        ? {}
        : {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
    }),
    // 热更新插件
    isDev &&
      new ReactRefreshWebpackPlugin({
        exclude: [/node_modules/],
      }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolve("../tsconfig.json"),
      },
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       to: "public",
    //     },
    //   ],
    // }),
  ],
  stats: "errors-warnings",
  node: {
    global: true,
  },
};
