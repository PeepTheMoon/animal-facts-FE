const { 
  setFacts, 
  SET_FACTS, 
  setFactsLoading, 
  SET_FACTS_LOADING,
  addFact, 
  ADD_FACT
} = require('./factsActions');

describe('facts actions', () => {
  it('creates a SET_FACTS action', () => {
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

    expect(action).toEqual({
      type: SET_FACTS,
      payload: [
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

  it('creates a SET_FACTS_LOADING action', () => {
    const action = setFactsLoading();

    expect(action).toEqual({
      type: SET_FACTS_LOADING
    });
  });

  it('creates an ADD_FACT action', () => {
    const action = addFact({
      image: 'animalImage3.png',
      caption: 'interesting fact 3'
    });

    expect(action).toEqual({
      type: ADD_FACT,
      payload: {
        image: 'animalImage3.png',
        caption: 'interesting fact 3'
      }
    });
  });
});
