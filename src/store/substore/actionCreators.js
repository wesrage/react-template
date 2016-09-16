import {
   ACTION_TYPE_NAME,
} from './types';

export const simpleCreator = () => ({
   type: ACTION_TYPE_NAME,
   property: 'value',
});

export const thunkCreator = () => (dispatch, getState) => {
   dispatch({ type: ACTION_TYPE_NAME });
   fetch('/resource')
      .then(() => {
         if (getState().prop === 'someValue') {
            dispatch({ type: ACTION_TYPE_NAME });
         }
      })
      .catch(() => {
         dispatch({ type: ACTION_TYPE_NAME });
      });
};
