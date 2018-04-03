import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
// import { i18nReducer, i18nActions, Loc } from 'redux-react-native-i18n';
//
// reducers.i18n = i18nReducer

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk)
    // ,
    // autoRehydrate() // not middleware, it's store enhancer
  )
);

// const dictionaries = {
//     'en-US': {
//         'oh': 'Order History',
//     },
//     'ko-KR': {
//         'oh': '주문내역',
//     },
//     'zh_CN': {
//         'oh': '訂單歷史',
//     },
//     'es-MX': {
//         'oh': 'Historial de pedidos',
//     },
//     /* ... */
//     /* Other dictionaries */
// }
//
// store.dispatch( i18nActions.setDictionaries( dictionaries ) )
//
// // Set languages (simpliest exapmple) --------------------------------------------------------------------------------------------------
// const languages = [
//     {
//         code: 'en-US',
//         name: 'english'
//     },
//     {
//         code: 'ko-KR',
//         name: 'Korean'
//     },
//     {
//         code: 'zh_CN',
//         name: 'Chinese'
//     },
//     {
//         code: 'es-MX',
//         name: 'Mexican'
//     },
//     /* ... */
//     /* Other languages */
// ]
//
// store.dispatch( i18nActions.setLanguages( languages ) )
// store.dispatch( i18nActions.setCurrentLanguage( 'en-US' ) )

export default store;

// reducer...
// import { REHYDRATE } from 'redux-persist/constrants';

// case REHYDRATE:
  // action.payload is like saved
  // return action.payload.likedJobs || []; // first time, []..!
