import webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './config';
import { BuildPaths } from './config/build/types';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, './src/index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev,
});

export default config;