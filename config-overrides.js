const {override, addWebpackAlias} = require("customize-cra");
const path = require("path");

module.exports = override(
    // Custom Alias
    addWebpackAlias({
        ['@commons']: path.resolve(__dirname, 'src', 'components', 'commons')
    }),
);