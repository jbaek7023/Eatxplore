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
        rl: {
          ymba: 'You Might Be At...',
          boycl: 'Based on your location',
          oh: 'Order History',
        },
        ml: {
          recm: 'Recommendations',
          fm: 'Full Menu',
          your: 'What American People Like',
          boyn: 'Based on your nationality',
          mexc: 'What Mexican People Like',
          born: 'Based on restaurant\'s nationality'
        },
        md: {
          like: "Number of Likes: ",
          review: "Add a review",
          your: "Reviews from American people",
          rest: "Reviews from Mexican people"
        },
      },
      es: {
        rl: {
          ymba: 'Puedes estar en...',
          boycl: 'De acuerdo con tu ubicación',
          oh: 'Historial de pedidos',
        },
        ml: {
          recm: 'Recomendaciones',
          fm: 'Menú completo',
          your: 'Lo que a la gente mexicana',
          boyn: 'Basado en su nacionalidad',
          mexc: 'Lo que a la gente mexicana',
          born: 'Basado en la nacionalidad del restaurante'
        },
        md: {
          like: "Número de Me gusta: ",
          review: "Agregar una revisión",
          your: "Críticas de los mexicanos",
          rest: "Críticas de los mexicanos"
        },

      },
      ko: {
        rl: {
          ymba: '혹시 이곳에 계신가요?',
          boycl: '현재 주소에 따른 레스토랑입니다.',
          oh: '주문 내역',
        },
        ml: {
          recm: '추천 메뉴',
          fm: '전체 메뉴',
          your: '한국인들이 좋아하는 메뉴',
          boyn: '당신의 국적을 참고함',
          mexc: '멕시코인들이 좋아하는 메뉴',
          born: '레스토랑의 국적을 참고함'
        },
        md: {
          like: "좋아요 갯수: ",
          review: "리뷰 남기기",
          your: "한국인들의 리뷰",
          rest: "멕시코인들의 리뷰"
        },
      },
      ch: {
        rl: {
          ymba: '猜你可能在',
          boycl: '根據您的位置',
          oh: '訂單歷史',
        },
        ml: {
          recm: '建议',
          fm: '完整菜单',
          your: '美国人喜欢什么',
          boyn:'根据你的国籍',
          mexc:'墨西哥人喜欢什么',
          born: '基于餐厅的国籍'
        },
        md: {
          like: "喜欢的数量：",
          review: "添加评论",
          your: "中国人的评论",
          rest: "墨西哥人的评论"
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
