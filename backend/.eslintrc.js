module.exports = {
extends: ['../.eslintrc.js'],
env: {
    node: true,
},
rules: {
    // Reglas específicas para backend
    'no-process-exit': 'error',
    '@typescript-eslint/no-var-requires': 'off', // Permite require() en el backend
    'node/no-unsupported-features/es-syntax': 'off',
},
overrides: [
    {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    env: {
        jest: true,
    },
    },
],
};

