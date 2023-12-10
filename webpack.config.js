const path = require('path');

module.exports = {
    entry: './src/index.js', // Adjust the entry point based on your project structure
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'), // Adjust the alias based on your project structure
        },
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true,
    },
};
