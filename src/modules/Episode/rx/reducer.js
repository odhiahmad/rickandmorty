const INITIAL_STATE = {
  data: [],
  dataDetail: [],
  info: {},
  loading: false,
  isError: false,
};

function EpisodeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'EPISODE_GET_DATA_START':
      return {
        ...state,
        loading: true,
      };
    case 'EPISODE_GET_DATA_SUCCESS':
      return {
        ...state,
        data: [...state.data, ...action.payload.results],
        info: action.payload.info,
        loading: false,
      };
    case 'EPISODE_GET_DATA_FAILED':
      return {
        ...state,
        data: [],
        loading: false,
        isError: true,
      };

    case 'EPISODE_GET_DETAIL_START':
      return {
        ...state,
        loading: true,
      };
    case 'EPISODE_GET_DETAIL_SUCCESS':
      return {
        ...state,
        dataDetail: action.payload,
        loading: false,
      };
    case 'EPISODE_GET_DETAIL_FAILED':
      return {
        ...state,
        data: [],
        loading: false,
        isError: true,
      };

    default:
      return state;
  }
}
export default EpisodeReducer;
