import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { bg:'#0a0a0f', card:'rgba(255,255,255,0.05)', neon:'#7c3aed' } } },
  plugins: []
};
export default config;
