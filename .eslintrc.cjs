/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'plugin:@intlify/vue-i18n/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: { browser: true, node: true, es6: true },
  settings: {
    'vue-i18n': {
      localeDir: './src/locales/*.{json,json5,yaml,yml}',
      messageSyntaxVersion: '^9.2.2',
    },
  },
}
