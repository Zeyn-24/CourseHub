module.exports = {
extends: ['../.eslintrc.js'],
env: {
    browser: true,
    es6: true,
},
parserOptions: {
    ecmaFeatures: {
    jsx: true,
    },
},
settings: {
    react: {
    version: 'detect',
    },
},
rules: {
    // Reglas específicas para frontend
    '@typescript-eslint/no-non-null-assertion': 'warn',
    'react/prop-types': 'off', // Si usas TypeScript con React
},
overrides: [
    {
    files: ['**/*.tsx'],
    rules: {
        'react/prop-types': 'off',
    },
    },
    {
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
    env: {
        jest: true,
    },
    },
],
};

