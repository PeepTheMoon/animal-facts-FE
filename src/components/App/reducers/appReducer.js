import { SET_FACTS, SET_FACTS_LOADING } from '../../../actions/factsActions';

export const initialState = {
  // users: []
  facts: [],
  loading: false
};

export default function reducer(state, action) {
  switch(action.type) {
    case SET_FACTS:
      return { ...state, loading: false, facts: action.payload };
    case SET_FACTS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
