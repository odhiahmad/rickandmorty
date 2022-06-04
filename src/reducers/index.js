import {combineReducers} from 'redux';

import CharacterReducer from '../modules/Character/rx/reducer';
import EpisodeReducer from '../modules/Episode/rx/reducer';

export default combineReducers({
  character: CharacterReducer,
  episode: EpisodeReducer,
});
