import { FETCH_TOKEN } from '../type/AuthType';

export const auth = data => {
  console.log('Data auth di AuthAction, ', data)
  return {
    type: FETCH_TOKEN,
    payload: data
  };
};
