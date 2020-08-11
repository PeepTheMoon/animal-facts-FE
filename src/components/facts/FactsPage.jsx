import React, { useEffect } from 'react';
import Facts from './Facts';
import { useDispatch, useSelector } from 'react-redux';
import { setFacts, setFactsLoading } from '../../actions/factsActions';
import { getFactsLoading } from '../selectors/factsSelectors';
import { fetchFacts } from '../../../services/fetchFacts';

const FactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getFactsLoading);

  useEffect(() => {
    dispatch(setFactsLoading());
    fetchFacts()
      .then(facts => {
        dispatch(setFacts(facts));
      });
  }, []);

  if(loading) return <h1>Loading Facts</h1>;

  return (
    <Facts />
  );
};

export default FactsPage;
