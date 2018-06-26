module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8
    },
    plugins: [
        'import',
        'react',
        'security',
        'lodash',
    ],
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        //'plugin:lodash/recommended',
    ],
    env: {
        node: true,
        es6: true
    },
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs'],
        'comma-spacing': ['error', {before: false, after: true}],
        indent: ['error', 4, { SwitchCase: 1 }],
        'keyword-spacing': 'error',
        'lodash/prefer-lodash-method': 'off',       // 154
        'lodash/import-scope': 'off',               // 118
        'lodash/prefer-noop': 'off',                // 50
        'lodash/prefer-lodash-typecheck': 'off',    // 22
        'lodash/chaining': 'off',                   // 19
        'lodash/preferred-alias': 'off',            // 19
        'lodash/prefer-includes': 'off',            // 18
        'lodash/prefer-constant': 'off',            // 12
        'lodash/prefer-is-nil': 'off',              // 9
        'lodash/prefer-get': 'off',                 // 8
        'lodash/matches-shorthand': 'off',          // 4
        'lodash/prefer-startswith': 'off',          // 4
        'lodash/prefer-lodash-chain': 'off',        // 2
        'lodash/prefer-filter': 'off',              // 1
        'lodash/prefer-map': 'off',                 // 1
        'max-len': 'off',
        'no-console': 'error',
        'no-lonely-if': 'error',
        'no-spaced-func': 'error',
        'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
        'no-var': 'error',
        'object-shorthand': ['error', 'properties'],
        'one-var': ['error', 'never'],
        'operator-linebreak': 'off',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single'],
        'security/detect-buffer-noassert': 'error',
        'security/detect-child-process': 'error',
        'security/detect-disable-mustache-escape': 'error',
        'security/detect-eval-with-expression': 'error',
        'security/detect-new-buffer': 'off', // ------------------------------13
        'security/detect-no-csrf-before-method-override': 'error',
        'security/detect-non-literal-fs-filename': 'off', // -----------------10
        'security/detect-non-literal-regexp': 'off', // -----------------------6
        'security/detect-non-literal-require': 'off', // --------------------108
        'security/detect-object-injection': 'off', // ------------------------81
        'security/detect-possible-timing-attacks': 'error',
        'security/detect-pseudoRandomBytes': 'error',
        'security/detect-unsafe-regex': 'off', // -----------------------------3
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'spaced-comment': 'off'
    }
};
