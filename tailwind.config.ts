import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                handwriting: ['var(--font-handwriting)'],
            },
            gridTemplateRows: {
                'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
            },
        },
    },
    plugins: [],
}
export default config
