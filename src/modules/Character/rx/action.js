import {getCharacter} from '@services/character';

export const getData = page => {
  return async dispatch => {
    dispatch({type: 'CHARACTER_GET_DATA_START'});
    const dataGet = await getCharacter(page);
    if (dataGet) {
      dispatch({type: 'CHARACTER_GET_DATA_SUCCESS', payload: dataGet.data});
    } else {
      dispatch({type: 'CHARACTER_GET_DATA_FAILED'});
    }
  };
};
