import {
  EXAMPLE,
} from '../actions/types';

const INITIAL_STATE = { }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EXAMPLE:
      return { ...state }
    default:
      return state;
  }
}
