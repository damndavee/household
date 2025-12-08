module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [],
  ignorePatterns: ['**/__tests__/*', '**/mocks/*', '*config.js', '**/node_modules/*', '**/.storybook/*', '**/deplyment/*', '**build/*', '*.d.ts'],
  extends: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-duplicate-imports': 'error',
    'no-import-assign': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'import', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: 'block' },
      { blankLine: 'always', prev: 'const', next: 'block-like' },
    ],
  },
};
