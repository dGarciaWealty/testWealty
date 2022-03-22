const path = require("path");
const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  localePath: path.resolve('./public/locales'),
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use 'variables' as *; @use 'mixins' as *;`,
  },
};
