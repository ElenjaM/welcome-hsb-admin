import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            // Add this option to help with preamble detection
            //jsxRuntime: 'automatic',
            babel: {
                plugins: [
                    // Add any Babel plugins if needed
                ]
            }
        })
    ],
    server: {
        port: 3000,
        // Enable this to handle SPA routing properly
        historyApiFallback: true,
        open: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    esbuild: {
        loader: {
            '.js': 'jsx'
        },
        alias: {
            '@components': '/src/components',
            '@pages': '/src/pages',
            '@data': '/src/data',
            '@i18n': '/src/i18n',
        }
    },
    // Make sure the base URL is set correctly for routing
    base: '/'
})