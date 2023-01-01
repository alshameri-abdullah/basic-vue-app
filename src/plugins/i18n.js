import { createI18n } from 'vue-i18n'
import ar from '@/locales/ar.json'

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: import.meta.env.VITE_VUE_APP_I18N_LOCALE || 'ar',
  fallbackLocale: import.meta.env.VITE_VUE_APP_I18N_FALLBACK_LOCALE || 'ar',
  messages: { ar },
})
