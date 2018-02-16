

module.exports = {
  entry: "./src/main/js/app.js",
  output: {
    filename: "./src/main/resources/static/built/bundle.js"
  },

    resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
