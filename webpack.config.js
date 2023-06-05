const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js",
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js"
    },

    module: {
        rules: [
            /* Babel Loader */
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { "runtime": "automatic" }]
                        ]
                    },
                },
            },

            /* Style Loaders */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                        },
                    },
                ],
            },

            // Assets Loader
            {
                test: /\.svg/,
                type: 'asset/inline'
            },

            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    },
                ],

                type: 'javascript/auto'
            },
        ],

    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        port: 3000,
        hot: true, // NOTE: Adds HMR Plugin
        liveReload: true,
    },

    mode: "development",
}
