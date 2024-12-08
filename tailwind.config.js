/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                logo: ['Sofia', ...defaultTheme.fontFamily.sans],
                heading: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
            lineHeight: {
                4.5: '18px',
            },
            margin: {
                'navbar-bottom': '49px',
                'navbar-left': '73px',
                'navbar-left-open': '245px',
            },
            maxWidth: {
                login: '350px',
            },
            padding: {
                13: '52px',
            },
            scrollMargin: {
                header: '61px',
            },
            width: {
                'navbar-left-open': '245px',
                58: '14.5rem',
            },
        },
    },
    plugins: [],
}
