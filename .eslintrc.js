module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ["react", "react-hooks"],
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  ignorePatterns: [".*", "config", "public", "node_modules", "dist"], // 忽略指定文件夹或文件
  rules: {
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "arrow-parens": "off",
    "linebreak-style": "off",
    "import/extensions": "off",
    "comma-dangle": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/comma-dangle": "off",
    "react/jsx-one-expression-per-line": "off",
    "arrow-body-style": "off",
    "import/newline-after-import": "off",
    quotes: "off",
    "@typescript-eslint/quotes": [1, "double"],
    "react/function-component-definition": "off",
    semi: 2, // 语句强制分号结尾
    "prefer-const": "off",
    "prefer-promise-reject-errors": "off",
    eqeqeq: "off",
    radix: "off",
    "no-unused-vars": "off",
    "spaced-comment": "off",
    "no-nested-ternary": "off",
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复
    "no-duplicate-case": 2, //switch中的case标签不能重复
    "no-dupe-args": 2, //函数参数不能重复
    "no-func-assign": 2, //禁止重复的函数声明
    "no-redeclare": 2, //禁止重复声明变量
    "no-undef": 2, //不能有未定义的变量
    "no-console": "off",
    "react/no-array-index-key": "off",
    "no-param-reassign": "off",
    "no-useless-constructor": "off",
    "react/no-danger": "off", //防止使用危险的JSX属性
    "react/no-multi-comp": 2, //防止每个文件有多个组件定义
    "react/no-unknown-property": 2, //防止使用未知的DOM属性
    "react/self-closing-comp": "off",
    "react/no-unused-state": "off",
    "react/no-typos": "off",
    "react/prop-types": "off",
    "react/no-access-state-in-setstate": "off",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "prefer-rest-params": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/newline-after-import": "off",
    "no-case-declarations": "off",
    "no-unreachable": 1, //不能有无法执行的代码
    "max-len": "off",
    "guard-for-in": "off",
  },
};
