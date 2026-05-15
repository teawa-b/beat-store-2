import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React bundle
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // UI framework
          'vendor-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-select',
            '@radix-ui/react-avatar',
          ],
          // Animation libraries
          'vendor-animation': ['framer-motion'],
          // Payment processing
          'vendor-payments': [
            '@stripe/stripe-js',
            '@stripe/react-stripe-js',
            '@paypal/react-paypal-js',
          ],
          // Charts (admin only)
          'vendor-charts': ['recharts'],
          // PDF generation
          'vendor-pdf': ['pdf-lib'],
        },
      },
    },
    // Use esbuild for minification (default, fast, no extra dep needed)
    minify: 'esbuild',
  },
  // Drop console.log in production
  esbuild: {
    drop: ['console', 'debugger'],
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
