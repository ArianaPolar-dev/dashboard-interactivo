export default {
  base: "/dashboard-interactivo/",  // Pon el nombre exacto de tu repo aquí
  plugins: [react()],
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
