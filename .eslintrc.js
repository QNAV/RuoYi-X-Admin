module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  globals: {
    API_HOST: true,
    TOKEN_KEY: true,
    LOGIN_PATH_NAME: true,
    MODAL_CONFIRM_TITLE: true,
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/self-closing-comp': 'error',
  },
};
