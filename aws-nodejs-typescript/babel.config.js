// https://babeljs.io/docs/en/7.5.0/config-files#project-wide-configuration
// originally added based on guidance here https://jestjs.io/docs/en/getting-started
// See `Using Babel` and `Using TypeScript` sections
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-typescript',
    ],
};
