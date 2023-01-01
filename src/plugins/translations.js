import i18n from '@/plugins/i18n'
import axios from 'axios'
import { saveState, getState } from '@/utils/localStorage'

export const Trans = {
  get defaultLocale() {
    return import.meta.env.VITE_VUE_APP_I18N_LOCALE
  },

  get supportedLocales() {
    return import.meta.env.VITE_VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
  },

  set currentLocale(locale) {
    i18n.global.locale.value = locale
  },

  get currentLocale() {
    return i18n.global.locale.value
  },

  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale)
  },

  getClientLocale() {
    return (
      getState('locale') ||
      Trans.defaultLocale ||
      window.navigator.language ||
      window.navigator.userLanguage
    )
  },

  setClientLocale(locale) {
    return saveState('locale', locale)
  },

  loadLocaleFile(locale) {
    let direction = locale == 'ar' ? 'rtl' : 'ltr'
    // import(`@/assets/sass/main-${direction}.scss`)
    return import(`@/locales/${locale}.json`)
  },

  setI18nLocaleInServices(locale) {
    axios.defaults.headers.common['Accept-Language'] = locale

    document.querySelector('html').setAttribute('lang', locale)
    document
      .querySelector('html')
      .classList.toggle(locale == 'ar' ? 'rtl' : 'ltr')

    document
      .querySelector('html')
      .setAttribute('dir', locale == 'ar' ? 'rtl' : 'ltr')

    Trans.currentLocale = locale
    
    saveState('locale', locale)

    return locale
  },

  async changeLocale(locale) {
    if (!Trans.isLocaleSupported(locale))
      return Promise.reject(new Error('Locale not supported'))

    await Trans.loadLocaleFile(locale).then((msgs) => {
      i18n.global.setLocaleMessage(locale, msgs.default || msgs)
      return Trans.setI18nLocaleInServices(locale)
    })
  },
}
