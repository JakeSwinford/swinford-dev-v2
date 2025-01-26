import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';
import { readdirSync, statSync } from 'fs';


function getBlogEntries(baseDir: string): Record<string, string> {
  const entries: Record<string, string> = {};
  const dirPath = resolve(__dirname, baseDir);

  readdirSync(dirPath).forEach((entry) => {
    const entryPath = resolve(dirPath, entry);
    if (statSync(entryPath).isDirectory()) {
      entries[entry] = resolve(entryPath, 'index.html');
    }
  });

  return entries;
}

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, '/src/client/pages/index/index.html'),
        blog: resolve(__dirname, 'src/client/pages/blog/index.html'),
        ...getBlogEntries('src/client/pages/blog/entries'), 
      },
    },
  },

  plugins: [tailwindcss(),react()],
})
