import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    host: true, // Expose the server to external hosts
    allowedHosts: [
      'cc813145-55fc-4f8f-95a3-cb7e62e37d2a-00-3gxm1stmcb0ye.pike.repl.co', // Add your specific external host
    ]
  }
})
