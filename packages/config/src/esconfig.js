export * as prettierOptions from './prettierrc';

export default {
  extends: ['next/core-web-vitals', 'prettier', 'plugin:jest-formatting/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks', 'sonarjs', 'import', 'jest-formatting'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-console': ['warn', { allow: ['info'] }],
    'no-empty-function': ['warn'],
    'react/display-name': 'off',
  },
  overrides: [
    {
      files: ['**/*.(tsx|ts)'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { vars: 'all', args: 'all', argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-empty-function': ['warn'],
      },
    },
  ],
};
