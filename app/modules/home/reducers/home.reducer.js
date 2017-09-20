import {ACTION_SAMPLE} from '../actions/index';

export default function homeReducer(state ={}, action) {
  switch (action.type) {
    case ACTION_SAMPLE:
      return {...state, sampleData: action.payload}
  }
  return state;
}