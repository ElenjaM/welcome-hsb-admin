// eslint.config.js
import tseslint from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

// Legacy-Konfigurationen für Module-Resolver verwenden
const compat = new FlatCompat();

export default [
    { ignores: ['dist'] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...compat.config({
        extends: [
            'plugin:import/typescript',
        ],
        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
                node: true,
            },
        },
    }),
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            // React-Hooks Regeln
            ...reactHooks.configs.recommended.rules,

            // React-Refresh Regel
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            // Ungenutzte Variablen ausdrücklich deaktivieren (mit "off")
            '@typescript-eslint/no-unused-vars': 'off',
            'no-unused-vars': 'off',

            // Path-Alias (@) Probleme vollständig ignorieren
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',

            // Import-Fehler ignorieren (besonders für Aliase wichtig)
            'import/no-unresolved': 'off',
            'import/extensions': 'off',
            'import/no-absolute-path': 'off',
            'import/no-extraneous-dependencies': 'off',
        },
    },
];