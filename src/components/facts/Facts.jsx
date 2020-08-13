import React from 'react';
import { useSelector } from 'react-redux';
import { getFacts } from '../selectors/factsSelectors';
import Fact from './Fact';

const Facts = () => {
  const facts = useSelector(getFacts);

  const factElements = facts.map((fact, i) => (
    <li key={i}>
      <Fact {...fact} />
    </li>
  ));

  return (
    <ul>
      {factElements}
    </ul>
  );
};

export default Facts;
