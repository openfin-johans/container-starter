const path = require('path');

module.exports = [
    {
        watch: true,
        entry: './client/src/provider.ts',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'provider.bundle.js',
            path: path.resolve(__dirname, '..', 'public', 'js'),
        },
    },
    {
        watch: true,
        entry: './client/src/view.ts',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'view.bundle.js',
            path: path.resolve(__dirname, '..', 'public', 'js'),
        },
    },
    {   
        watch: true,
        entry: './client/src/window.ts',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'window.bundle.js',
            path: path.resolve(__dirname, '..', 'public', 'js'),
        },
    },
    {
        watch: true,
        entry: './client/src/dialog.ts',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'dialog.bundle.js',
            path: path.resolve(__dirname, '..', 'public', 'js'),
        },
    }
];
