import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Anime-List/',
  plugins: [react()],
})



// export default defineConfig({
//   base: './'
// });
