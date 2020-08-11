const { getFacts, getFactsLoading } = require('./factsSelectors');

describe('facts selectors', () => {
  it('selects a list of facts from state', () => {
    const state = {
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
    };

    const facts = getFacts(state);

    expect(facts).toEqual([
      {
        image: 'animalImage1.png',
        caption: 'interesting fact 1'
      },
      {
        image: 'animalImage2.png',
        caption: 'interesting fact 2'
      }
    ]);
  });

  it('selects the loading state', () => {
    const state = {
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
    };

    const loading = getFactsLoading(state);

    expect(loading).toEqual(false);
  });
});
