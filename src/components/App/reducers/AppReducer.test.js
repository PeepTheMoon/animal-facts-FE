const { setFacts, setFactsLoading } = require('../../../actions/factsActions');
const { default: reducer } = require('./AppReducer');

describe('App Reducer', () => {
  it('handles the SET_FACTS action', () => {
    const state = {
      loading: true,
      facts: []
    };

    const action = setFacts([
      {
        image: 'animalImage1.png',
        caption: 'interesting fact 1'
      },
      {
        image: 'animalImage2.png',
        caption: 'interesting fact 2'
      }
    ]);
    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: false, 
      facts: [
        {
          image: 'animalImage1.png',
          caption: 'interesting fact 1'
        },
        {
          image: 'animalImage2.png',
          caption: 'interesting fact 2'
        }
      ]
    });
  });

  it('handles the SET_FACTS_LOADING action', () => {
    const state = {
      loading: false,
      facts: []
    };

    const action = setFactsLoading();

    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: true,
      facts: []
    });
  });
});
