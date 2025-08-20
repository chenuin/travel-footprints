import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default {
    base: '/travel-footprints/',
    plugins: [
        vue(),
        svgLoader(),
    ],
    resolve: {
        alias: {
            '@': '/src',
            'vue': 'vue/dist/vue.esm-bundler.js',
        },
    },
};
