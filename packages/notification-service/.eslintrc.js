module.exports = {
  extends: ['@valora/eslint-config-typescript'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  ignorePatterns: ['**/__mocks__/**', '**/lcov-report/**'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],
  },
}
