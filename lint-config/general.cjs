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
    'brace-style': ['error', '1tbs'],
    curly: 'error',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'linebreak-style': ['warn', 'unix'],
    'no-inline-comments': 'warn',
    'object-curly-spacing': 'off',
    quotes: ['error', 'single'],
    'space-before-blocks': 'warn',
    'space-in-parens': 'warn',
  },
};
