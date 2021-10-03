// src目录下新建.eslintrc.js文件,参考如下配置：
module.exports = {
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  env: {
    browser: true,
    node: true,
    es2021: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: ['vue'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['/@', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 0,
  },
};
