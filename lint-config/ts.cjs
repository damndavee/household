module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [],
  ignorePatterns: ['**/__tests__/*', '**/mocks/*', '*config.js', '**/node_modules/*', '**/.storybook/*', '**/deployment/*', '**build/*', '*.d.ts'],
  extends: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'never',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/no-require-imports': 'off',
  },
};
