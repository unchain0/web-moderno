import js from '@eslint/js';
export default [
  js.configs.recommended,
  {
    languageOptions: { ecmaVersion: 2022, sourceType: 'module', globals: { console: 'readonly', require: 'readonly', module: 'readonly', exports: 'readonly', global: 'readonly', __dirname: 'readonly', __filename: 'readonly', process: 'readonly', Buffer: 'readonly', setTimeout: 'readonly', clearTimeout: 'readonly', setInterval: 'readonly', clearInterval: 'readonly', document: 'readonly', window: 'readonly', navigator: 'readonly', fetch: 'readonly' } },
    rules: { strict: ['error', 'global'], 'no-unused-vars': 'error', complexity: ['error', 10], 'no-redeclare': 'off' },
  },
];
