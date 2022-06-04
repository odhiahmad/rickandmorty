import {getEpisode} from '@services/episode';
import {getCharacterDetail} from '@services/character';
export const getData = page => {
  return async dispatch => {
    dispatch({type: 'EPISODE_GET_DATA_START'});
    const dataGet = await getEpisode(page);
    if (dataGet) {
      dispatch({type: 'EPISODE_GET_DATA_SUCCESS', payload: dataGet.data});
    } else {
      dispatch({type: 'EPISODE_GET_DATA_FAILED'});
    }
  };
};

export const getDetail = (item, type) => {
  return async dispatch => {
    dispatch({type: 'EPISODE_GET_DETAIL_START'});
    const dataItem = [];

    if (type === 'all') {
      for (let i = 0; i < item.length; i++) {
        const ArrayId = item[i].split('/');
        const dataGet = await getCharacterDetail(ArrayId[ArrayId.length - 1]);
        dataItem.push({
          image: dataGet.data.image,
          name: dataGet.data.name,
        });
      }

      if (dataItem.length === item.length) {
        dispatch({type: 'EPISODE_GET_DETAIL_SUCCESS', payload: dataItem});
      } else {
        dispatch({type: 'EPISODE_GET_DETAIL_FAILED'});
      }
    } else {
      for (let i = 0; i < 7; i++) {
        const ArrayId = item[i].split('/');
        const dataGet = await getCharacterDetail(ArrayId[ArrayId.length - 1]);
        dataItem.push({
          image: dataGet.data.image,
          name: dataGet.data.name,
        });
      }

      dataItem.push({
        image: null,
        name: item.length - 7,
      });

      if (dataItem.length === 8) {
        dispatch({type: 'EPISODE_GET_DETAIL_SUCCESS', payload: dataItem});
      } else {
        dispatch({type: 'EPISODE_GET_DETAIL_FAILED'});
      }
    }
  };
};
