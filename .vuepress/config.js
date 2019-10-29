module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Website', link: 'https://www.your-domain.com' },
            { text: 'Login', link: 'https://www.your-domain.com/login' },
        ],
        sidebar: 'auto',
    },
    markdown: {
        lineNumbers: true
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer"),
        ],
    },
}