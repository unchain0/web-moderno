import js from '@eslint/js';

// Teaching files intentionally demonstrate bad practices (redeclaration,
// implicit globals, constant reassignment). They are excluded from the
// strict ruleset so the linter can act as a real gate for the rest of the repo.
const teachingFiles = [
  'controle/doWhile.js',
  'controle/switch.js',
  'controle/while.js',
  'exercicios/js/FuncaoDaSorte.js',
  'fundamentos/destructuring_3.js',
  'fundamentos/destructuring_4.js',
  'fundamentos/experimentos.js',
  'fundamentos/inicio/dados_2.js',
  'fundamentos/inicio/dados_3.js',
  'fundamentos/inicio/dados_4.js',
  'fundamentos/relacionais.js',
  'fundamentos/variaveis.js',
];

export default [
  js.configs.recommended,
  {
    languageOptions: { ecmaVersion: 2022, sourceType: 'module', globals: { console: 'readonly', require: 'readonly', module: 'readonly', exports: 'readonly', global: 'readonly', __dirname: 'readonly', __filename: 'readonly', process: 'readonly', Buffer: 'readonly', setTimeout: 'readonly', clearTimeout: 'readonly', setInterval: 'readonly', clearInterval: 'readonly', document: 'readonly', window: 'readonly', navigator: 'readonly', fetch: 'readonly' } },
    rules: { strict: ['error', 'global'], 'no-unused-vars': 'error', complexity: ['error', 10], 'no-redeclare': 'off' },
  },
  ...teachingFiles.map((file) => ({
    files: [file],
    rules: {
      'no-redeclare': 'off',
      'no-undef': 'off',
      'no-const-assign': 'off',
      'no-unused-vars': 'off',
      'no-constant-binary-expression': 'off',
      complexity: 'off',
    },
  })),
];
