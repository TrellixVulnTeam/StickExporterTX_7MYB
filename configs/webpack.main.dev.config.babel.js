import baseConfig from "./webpack.base.config.js";
import {merge} from 'webpack-merge';

export default merge(baseConfig, {
  mode: 'development',
  target: 'electron-main',
  entry: './src/index.ts',
  output: {
    filename: '../index.build.js'
  },
});