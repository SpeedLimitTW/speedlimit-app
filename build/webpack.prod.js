'use strict'

const webpack            = require('webpack')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const ProgressBarPlugin  = require('progress-bar-webpack-plugin')
const merge              = require('webpack-merge')
const config             = require('./webpack.base')
const pkg                = require('../package')

module.exports = merge(config,
{
    output:
    {
        filename: '[name].[chunkhash:8].js'
    },
    entry:
    {
        vendor: Object.keys(pkg.dependencies).filter(name =>
        {
            // update the code if you want to
            // remove some dependencies you don't need in the vendor bundle
            return true
        })
    },
    plugins:
    [
        new ProgressBarPlugin(),
        new ExtractTextPlugin('styles.[contenthash:8].css'),
        new webpack.DefinePlugin
        ({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin
        ({
            minimize: true
        }),
        new webpack.optimize.UglifyJsPlugin
        ({
            compress:
            {
                warnings: false
            },
            comments: false
        }),
        // extract vendor chunks
        new webpack.optimize.CommonsChunkPlugin
        ({
            name    : 'vendor',
            filename: 'vendor.[chunkhash:8].js'
        }),
        new webpack.LoaderOptionsPlugin
        ({
            vue:
            {
                loaders:
                {
                    sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax",
                    css: ExtractTextPlugin.extract
                    ({
                        use  : 'css-loader',
                        fallback: 'vue-style-loader'
                    })
                }
            }
        })
    ]
})
