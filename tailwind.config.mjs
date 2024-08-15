/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        accentCyan: 'hsl(176, 68%, 64%)',
      },
    },
  },

  plugins: [],
};
