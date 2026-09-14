import * as path from 'path';

export default {
  mode: 'production',
  module: {
    rules: [
      {
        test: /(\.ts$|\.js$)/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  entry: {
    lib: path.resolve(process.cwd(), 'src/lib.ts'),
  },
  output: {
    library: {
      name: 'UMAP',
      type: 'umd',
    },
    filename: 'umap-js.min.js',
    path: path.resolve(process.cwd(), 'lib'),
    globalObject: 'this',
  },
  optimization: { minimize: true },
};
