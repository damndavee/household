// eslint.config.mjs
import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

import nx from '@nx/eslint-plugin';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import reactHooks from 'eslint-plugin-react-hooks';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  // ---- Global ignores (flat config uses 'globalIgnores' / 'ignores')
  globalIgnores(['node_modules', 'dist', 'build', 'coverage', '.expo', '.expo-shared', '.next', 'android', 'ios']),

  // ---- Translate legacy "extends" into flat config entries.
  // IMPORTANT: Keep this object free of 'plugins' to avoid duplicate plugin keys.
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // use JS module versions of your local configs
    path.resolve(__dirname, './lint-config/general.cjs'),
    path.resolve(__dirname, './lint-config/dev.cjs'),
    path.resolve(__dirname, './lint-config/grouping.cjs'),
    path.resolve(__dirname, './lint-config/ts.cjs'),
    'prettier',
  ),

  // ---- App/library files: declare plugins + rules in the same object
  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    // Plugins must be present in the same object as the rules that reference them
    plugins: {
      '@nx': nx,
      react,
      'react-native': reactNative,
      '@typescript-eslint': typescriptEslint,
      // fixupPluginRules prevents rule name mismatches with the flat config system
      prettier,
      'unused-imports': unusedImports,
      'react-hooks': reactHooks,
    },

    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      // If you need TS parser options or project files, add here
      // parser: tsParser, parserOptions: { project: ['tsconfig.base.json', '**/tsconfig.json'] }
    },

    rules: {
      // React Native
      'react-native/no-color-literals': 'warn',
      'react-native/no-unused-styles': 'error',
      'react-native/no-inline-styles': 'warn',
      'react-native/no-raw-text': 'error',
      'react-native/split-platform-components': 'error',

      // React / Hooks
      'react/jsx-no-bind': ['warn', { ignoreRefs: true, allowArrowFunctions: false, allowFunctions: false, allowBind: false }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Code style
      'prefer-arrow-callback': ['warn', { allowNamedFunctions: false }],
      'prettier/prettier': 'warn',

      // Nx boundaries
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [
            '@/src/**',
            '@/src',
            '@/api/**',
            '@/api',
            '@/components/**',
            '@/components',
            '@/configs/**',
            '@/configs',
            '@/features/**',
            '@/features',
            '@/hooks/**',
            '@/hooks',
            '@/reducers/**',
            '@/reducers',
            '@/store/**',
            '@/store',
            '@/types/**',
            '@/types',
            '@/navigation/**',
            '@/navigation',
            '@/utils/**',
            '@/utils',
          ],
          depConstraints: [{ sourceTag: '*', onlyDependOnLibsWithTags: ['*'] }],
        },
      ],

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', { args: 'after-used', argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },

  // ---- Tests & stories (override rules)
  {
    files: ['**/*.test.{ts,tsx,js,jsx}', '**/*.stories.{ts,tsx,js,jsx}'],

    // plugins again here if you rely on these rules in this block
    plugins: {
      '@typescript-eslint': typescriptEslint,
      react,
      'react-native': reactNative,
    },

    rules: {
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-native/no-inline-styles': 'off',
      'react/jsx-no-bind': 'off',
    },
  },
]);
