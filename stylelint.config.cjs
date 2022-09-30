module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-less',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.(css|less)'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply'],
      },
    ],
  },
};
