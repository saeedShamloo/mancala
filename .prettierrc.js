module.exports = {
    arrowParens: 'always',
    bracketSpacing: false,
    jsxBracketSameLine: false,
    printWidth: 100,
    endOfLine: 'auto',
    proseWrap: 'preserve',
    requirePragma: false,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    overrides: [
        {
            files: '*.json',
            options: {
                printWidth: 200
            }
        }
    ]
};
