'use strict'

const path              = require('path')
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const postcss =
[
    require('autoprefixer')
    ({
        browsers: ['last 2 versions', 'ie > 8']
    })
]

module.exports =
{
    entry:
    {
        client: './client/index.js'
    },
    output:
    {
        path      : path.join(__dirname, '../dist/assets'),
        filename  : '[name].js',
        publicPath: './assets'
    },
    resolve:
    {
        alias:
        {
            scripts    : path.resolve(__dirname, '../client/assets/scripts'),
            styles     : path.resolve(__dirname, '../client/assets/styles'),
            images     : path.resolve(__dirname, '../client/assets/images'),
            components : path.resolve(__dirname, '../client/components'),
            shared     : path.resolve(__dirname, '../client/components/shared'),
            validations: path.resolve(__dirname, '../client/validations'),
            apis       : path.resolve(__dirname, '../client/apis'),
            stores     : path.resolve(__dirname, '../client/stores'),
            modules    : path.resolve(__dirname, '../client/stores/modules'),
            views      : path.resolve(__dirname, '../client/views'),
            utils      : path.resolve(__dirname, '../client/utils'),
            routers    : path.resolve(__dirname, '../client/routers.js'),
        },
        extensions: ['.js', '.vue', '.css', '.json']
    },
    module:
    {
        loaders:
        [
            {
                test: /\.vue$/,
                loaders: 'vue-loader'
            },
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test  : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query :
                {
                  limit: 10000,
                  name: 'img/[hash:8].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
            },
            {
                test: /\.sass$/,
                loader: 'sass-loader'
            }
        ]
    },
    plugins:
    [
        new webpack.LoaderOptionsPlugin
        ({
            options:
            {
                babel:
                {
                    babelrc: false,
                    presets:
                    [
                        ['es2015', {modules: false}], 'stage-1'
                    ]
                },
                postcss,
                vue:
                {
                    postcss,
                    loaders:
                    {
                        sass: "vue-style-loader!css-loader?sourceMap!sass-loader?indentedSyntax"
                    }
                },
                sassLoader:
                {
                    includePaths: [path.resolve(__dirname)]
                },
                context: '/'
            }
        }),
        new HtmlWebpackPlugin
        ({
            title   : 'TeaMeow',
            template: __dirname + '/index.html',
            filename: '../index.html'
        }),
        new ExtractTextPlugin("[name].css")
    ]
}
