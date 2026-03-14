import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
    { files: ['**/*.js'], plugins: { js }, extends: ['js/recommended'] },
    {
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
    },
    {
        plugins: { '@stylistic': stylistic },
        rules: {
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/brace-style': ['error', '1tbs'],
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/indent': ['error', 4],
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/arrow-parens': ['error', 'always'],
        },
    },
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
]);
