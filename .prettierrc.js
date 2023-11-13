'use strict';

module.exports = {
    tabWidth: 4,
    trailingComma: 'es5',
    singleQuote: true,
    overrides: [
        {
            files: '*.{js,ts}',
            options: {
                singleQuote: true,
            },
        },
    ],
};
