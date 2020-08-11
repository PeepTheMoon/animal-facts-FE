export const fetchFacts = () => {
  return fetch('http://localhost:7890/api/v1/facts/')
    .then(res => res.json());
};
