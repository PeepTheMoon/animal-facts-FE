export const SET_FACTS = 'SET_FACTS';
export const setFacts = facts => ({
  type: SET_FACTS,
  payload: facts
});

export const SET_FACTS_LOADING = 'SET_FACTS_LOADING';
export const setFactsLoading = () => ({
  type: SET_FACTS_LOADING
});
