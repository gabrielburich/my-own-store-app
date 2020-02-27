const path = require('path')

module.exports = {
    resolve: {
        alias: {
            '@commons': path.resolve(__dirname, 'src', 'components', 'commons')
        }
    }
};
