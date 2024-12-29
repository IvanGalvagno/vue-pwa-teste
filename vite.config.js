import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import { VitePWA } from 'vite-plugin-pwa';
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
        VitePWA({
            registerType: 'autoUpdate',
            strategies: 'generateSW',
            workbox: {
                globDirectory: 'dev-dist',
                globPatterns: ['**/*.{js,wasm,css,html}'],
                globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js'],
            },
            includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
            devOptions: {
                enabled: true,
                /* other options */
            },
            manifest: {
                name: 'Vue3 PWA',
                short_name: 'VuePWA',
                description: 'Teste PWA',
                theme_color: '#42b883',
                icons: [
                    {
                        src: '/pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
});
