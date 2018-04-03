import i18n from 'i18next';
import Expo from 'expo';
// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: 'languageDetector',
  async: true, // async detection
  detect: (cb) => {
    return Expo.Util.getCurrentLocaleAsync()
      .then(lng => { cb(lng); })
  },
  init: () => {},
  cacheUserLanguage: () => {}
}
i18n
  .use(languageDetector)
  .init({
    fallbackLng: 'en',
    // the translations
    // realworld load that via xhr or bundle those using webpack
    resources: {
      en: {
        home: {
          title: 'Based on your location',
          oh: 'Order History',
        },
      },
      es: {
        home: {
          title: 'De acuerdo con tu ubicación',
          oh: 'Historial de pedidos',
        },
      },
      ko: {
        home: {
          title: '현재주소에 따른 레스토랑입니다.',
          oh: '주문내역',
        },
      },
      ch: {
        home: {
          title: '根據您的位置',
          oh: '訂單歷史',
        },
      },
      // have a initial namespace
      ns: ['translation'],
      defaultNS: 'translation',
      interpolation: {
        escapeValue: false // not needed for react
      }
    }
  });
export default i18n;
