/* eslint-disable */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/eslint-config-standard'
    '@vue/standard'
  ],
  parserOptions: {
    // parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // quotes:[2,'double']
    // 设置 函数名与括号之间 不用空格
    'space-before-function-paren': ['error', 'never'],
    indent: ['off', 2],
    'space-before-function-paren': 0
  }
}