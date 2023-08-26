import webpack from 'webpack';
import path from 'path';
import { BuildOptions } from "./types";
import { buildLoaders, buildPlugins, buildResolves, buildDevServer } from './index';


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        mode,
    entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(),
        },
        plugins: buildPlugins(paths),
        resolve: buildResolves(),
        devtool: isDev ? "eval-source-map" : undefined,
        devServer: isDev ? buildDevServer(options): undefined,   
    }
    
};