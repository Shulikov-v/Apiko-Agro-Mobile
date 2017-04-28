
/*
 WallabyJS React Native Config
 Works well with Jest + Enzyme
 */

/* eslint-disable */
module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.js',
            'package.json',
            '!src/**/__tests__/*.js',
            '!src/**/*.test.js',
        ],

        tests: [
            'src/**/__tests__/*.js',
            'src/**/*.test.js',
        ],

        env: {
            type: 'node',
            runner: 'node',
        },

        testFramework: 'jest',

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: [
                    'react-native'
                ],
                plugins: [
                    'transform-flow-strip-types',
                    'transform-object-rest-spread',
                ],
            }),
        },

        setup: (wallaby) => {
            wallaby.testFramework.configure(require('./package.json').jest);
        },
    };
};
