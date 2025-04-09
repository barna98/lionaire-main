import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            external: ['swiper/react', 'swiper/css/pagination', 'swiper/modules', 'swiper/css', 'swiper/css/autoplay'],
        },
    },
});
