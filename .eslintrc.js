module.exports = {
root: true,
env: {
    node: true,
    es6: true,
},
parser: '@typescript-eslint/parser',
parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
},
plugins: ['@typescript-eslint'],
extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
],
rules: {
    // Reglas comunes para todo el proyecto
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { 
    argsIgnorePattern: '^_',
    varsIgnorePattern: '^_' 
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
},
ignorePatterns: ['dist', 'build', 'node_modules', '*.js'],
};

