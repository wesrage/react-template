import {
   applyMiddleware,
   compose,
   createStore,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export function configureStore(initialState) {
   const middlewares = [
      thunk,
   ];
   const store = createStore(
      rootReducer,
      initialState,
      compose(
         applyMiddleware(...middlewares),
         window.devToolsExtension && window.devToolsExtension()
      )
   );

   if (module.hot) {
      module.hot.accept(() => {
         const nextRootReducer = require('./rootReducer');
         store.replaceReducer(nextRootReducer);
      });
   }

   return store;
}
