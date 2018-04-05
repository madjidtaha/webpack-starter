var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
module.exports = [
    {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['es2015', { modules: false }]
                ],
                plugins: [
                    'syntax-dynamic-import',
                    'transform-decorators-legacy'
                ]
            }
        }
    },
    {
        test: /\.json5$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'json5-loader',
        }
    },
    {
        test: /\.tpl.html$/,
        use: [ {
            loader: 'html-loader',
            options: {
                interpolate: true,
                root: path.resolve(__dirname, '..', '..', 'public'),
            }
        }],
    },
    {
        test: /\.inc\.svg$/,
        use: [
            { loader: 'raw-loader' }
        ],
    },
    {
      test: /\.(png|jpe?g|gif|svg|otf|ttf|woff2?|eot)$/,
      use: [{
        loader: 'file-loader',
        query: {
            name: "assets/[sha512:hash:base64:8].[ext]"
        }
      }]
    },
    {
        test: /\.scss$/,
        use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                  root: path.resolve(__dirname, '..', '..', 'public'),
              }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: function () {
                        return [
                            require('autoprefixer')
                        ];
                    }
                }
            },
            {
               loader: 'sass-loader',
               options: {
                 loadPath: ['node_modules/foundation-sites/scss', 'node_modules/motion-ui/src']
               }
            }
        ]
    },//
    {
        test: /(all)\.scss$/,
        use: ExtractTextPlugin.extract({
            use: [
                {
                  loader: 'css-loader',
                  options: {
                    root: path.resolve(__dirname, '..', '..', 'public'),
                    // url: false
                  }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                },
                {
                   loader: 'sass-loader',
                   options: {
                     includePaths: ['node_modules/foundation-sites/scss', 'node_modules/motion-ui/src']
                   }
                }
            ]
        }),
    },
];
