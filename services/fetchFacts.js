export const fetchFacts = () => {
  return fetch('http://localhost:7890/api/v1/facts/')
    .then(res => res.json());
};

export const createFact = fact => {
  return fetch('http://localhost:7890/api/v1/facts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fact)
  })
    .then(res => res.json());
};
