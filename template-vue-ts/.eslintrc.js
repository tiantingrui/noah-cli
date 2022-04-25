module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 'off',
    // 'no-undef': 'off',
  },
};
