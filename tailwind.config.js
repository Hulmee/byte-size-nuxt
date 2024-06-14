/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
    ],
    plugins: [require("daisyui")],
    daisyui: {
        // themes: ["coffee", "retro", ],
        themes: ["luxury", "retro",],
    },
}