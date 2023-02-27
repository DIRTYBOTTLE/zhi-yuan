/*
 * @Author: DirtyBottle 479763003@qq.com
 * @Date: 2023-01-18 02:36:21
 * @LastEditors: DirtyBottle 479763003@qq.com
 * @LastEditTime: 2023-01-18 16:08:21
 * @FilePath: /zhi-yuan/webpack.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by DirtyBottle 479763003@qq.com, All Rights Reserved. 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
});

module.exports = {
    mode: 'development', // production
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // devServer: {
    //     static: path.resolve(__dirname,'./dist')
    // },
    plugins: [htmlWebpackPlugin],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(png|gif|jpg|jpeg|svg|xml|json|gltf)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            },
            {
                test: /\.(scss)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
}