const INITIAL_STATE = {
  data: [],
  info: {},
  loading: false,
  isError: false,
};

function CharacterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHARACTER_GET_DATA_START':
      return {
        ...state,
        loading: true,
      };
    case 'CHARACTER_GET_DATA_SUCCESS':
      return {
        ...state,
        data: [...state.data, ...action.payload.results],
        info: action.payload.info,
        loading: false,
      };
    case 'CHARACTER_GET_DATA_FAILED':
      return {
        ...state,

        loading: false,
        isError: true,
      };

    default:
      return state;
  }
}
export default CharacterReducer;
