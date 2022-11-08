module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 'off',
    'global-require': 0,
    'no-console': 'off',
    'func-names': 'off',
    "vue/script-indent": ["error", 2, {  // script标签缩进设置
      "baseIndent": 1,
      "switchCase": 1,
      "ignores": ['ConditionalExpression']
    }],
    'no-extend-native': ['error', { exceptions: ['Number'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-unresolved': 0,
    'prettier/prettier': 'error'
  },
};
