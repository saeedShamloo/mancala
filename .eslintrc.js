module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    rules: {
        'no-console': 'warn',
        'no-eval': 'error',
        strict: ['error', 'safe'],
        'no-debugger': 'error',
        'brace-style': ['error', '1tbs', {allowSingleLine: true}],
        'no-trailing-spaces': 'error',
        'keyword-spacing': 'error',
        'space-before-function-paren': ['error', 'never'],
        'spaced-comment': ['error', 'always'],
        'vars-on-top': 'error',
        'no-undefined': 'warn',
        'comma-dangle': ['error', 'never'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'guard-for-in': 'error',
        'no-eval': 'error',
        'no-with': 'error',
        'valid-typeof': 'error',
        'no-unused-vars': 'error',
        'no-extra-semi': 'warn',
        'no-unreachable': 'warn',
        'no-unused-expressions': 'warn',
        'max-len': ['warn', 100, 4],
        'react/prefer-es6-class': 'warn',
        'react/jsx-boolean-value': 'warn',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-explicit-any': 'error',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'css-modules/no-undef-class': 'off'
    },
    settings: {
        react: {
            version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    }
};
