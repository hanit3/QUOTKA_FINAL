module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['prettier', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
  },
};
