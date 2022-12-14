/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}", "../../packages/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": "#557AFC",
                "secondary": "#604CE0",
                "darkness": "#171615",
            }
        },
    },
    plugins: [],
};