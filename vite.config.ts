import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components(),
    AutoImport({
      imports: ['vue'],
      dts: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/assets/scss/variables' as *;
                         @use '@/assets/scss/mixins' as *;
                         @use '@/assets/scss/helpers' as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
