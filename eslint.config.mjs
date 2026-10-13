import js from '@eslint/js';
export default [
  js.configs.recommended,
  {
    languageOptions: { ecmaVersion: 2022, sourceType: 'module' },
    rules: { strict: ['error', 'global'], 'no-unused-vars': 'error', complexity: ['error', 10] },
  },
];
