const path = require('path')
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        development: 'http://localhost:8010',
        ACCESS_TOKEN: 'accessToken',
        routes: ["users", "roles","calculator", "currency"]
    },
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en']
    }
}