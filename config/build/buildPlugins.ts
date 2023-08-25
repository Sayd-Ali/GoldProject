import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildPaths } from './types';

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ];
}