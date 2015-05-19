module.exports = {
    entry: './app.ts',
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
    },
    output: {
      filename: 'app.js'
    },
    module: {
      loaders: [
        { test: /\.ts$/, loader: 'awesome-typescript-loader?sourceMap&target=ES5' },
        // { test: /^(?!.*(bower_components|node_modules))+.+\.js$/,
        //   loader: 'traceur' }
      ]
    }
};
