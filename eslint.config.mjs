import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import nodePlugin from 'eslint-plugin-n'

export default tseslint.config(
  {
    // Ignorar archivos generados automáticamente
    ignores: ['dist', 'build', 'node_modules'],
  },

  // Configuración para el frontend (React)
  {
    name: 'frontend',
    files: ['frontend/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },

  // Configuración para el backend (Node.js)
  {
    name: 'backend',
    files: ['backend/**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      n: nodePlugin, // Plugin recomendado para Node.js
    },
    rules: {
      'n/no-missing-import': 'error',
      'n/no-unpublished-import': 'off',
      'n/no-unsupported-features/es-syntax': 'off',
    },
  }
)
