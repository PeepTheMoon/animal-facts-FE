import { SET_FACTS, SET_FACTS_LOADING, ADD_FACT } from '../../../actions/factsActions';

export const initialState = {
  // users: []
  factItem: {
    image: '',
    caption: ''
  },
  facts: [],
  loading: false
};

export default function reducer(state, action) {
  switch(action.type) {
    case ADD_FACT:
      return { ...state, facts: [...state.facts, action.payload] };
    case SET_FACTS:
      return { ...state, loading: false, facts: action.payload };
    case SET_FACTS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
