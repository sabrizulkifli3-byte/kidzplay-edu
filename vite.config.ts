import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({ plugins:[react(),tailwindcss(),VitePWA({registerType:'autoUpdate', includeAssets:['icons/icon.svg','icons/favicon.ico','icons/apple-touch-icon.png','icons/pwa-192.png','icons/pwa-512.png','icons/maskable-512.png'], manifest:{name:'KidzPlay — Kids Educational Games',short_name:'KidzPlay',description:'Bilingual educational arcade for children',theme_color:'#2563EB',background_color:'#e0f2fe',display:'standalone',orientation:'portrait',start_url:'/',scope:'/',icons:[{src:'/icons/pwa-192.png',sizes:'192x192',type:'image/png'},{src:'/icons/pwa-512.png',sizes:'512x512',type:'image/png'},{src:'/icons/maskable-512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png,ico,woff2,json}'],navigateFallback:'index.html'}})] });
