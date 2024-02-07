import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue'; // Add this line
import Laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    plugins: [
        Vue(), // Add this line
        Laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@/': `${path.resolve(__dirname, './resources')}/`,
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
});
