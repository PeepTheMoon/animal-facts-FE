import React from 'react';
import PropTypes from 'prop-types';

const Fact = ({ image, caption }) => (
  <figure>
    <img src={image} />
    <figcaption>{caption}</figcaption>
  </figure>
);

Fact.propTypes = {
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

export default Fact;

