
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
            '!src/**/__specs__/*.js',
            '!src/**/*.spec.js',
        ],

        tests: [
            'src/**/__specs__/*.js',
            'src/**/*.spec.js',
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
                    'transform-async-to-generator',
                ],
            }),
        },

        setup: (wallaby) => {
            wallaby.testFramework.configure(require('./package.json').jest);
        },
    };
};