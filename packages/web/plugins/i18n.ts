import { Plugin } from '@nuxt/types';

const i18nPlugin: Plugin = ({ app }) => {
  app.$moment.locale(app.i18n.locale);
  
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    app.$moment.locale(newLocale);
  }
}

export default i18nPlugin;