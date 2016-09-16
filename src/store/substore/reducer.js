import {
   ACTION_TYPE_NAME,
} from './types';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
   switch (action.type) {
      case ACTION_TYPE_NAME: return {
         ...state,
         property: action.value,
      };
      default: return state;
   }
}
