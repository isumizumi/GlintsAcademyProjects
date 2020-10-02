import { FETCH_TOKEN } from '../type/AuthType';

const initialState = {
  data: null
};

export default (state = initialState, action) => {
  // console.log('initial statenya',initialState);
  // console.log('statenya',state);
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
