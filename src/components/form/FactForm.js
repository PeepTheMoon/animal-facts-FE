import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFact } from '../../actions/factsActions';

const FactForm = () => {
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  const dispatch = useDispatch();

  const handleImageChange = ({ target }) => {
    setImage(target.value);
  };

  const handleCaptionChange = ({ target }) => {
    setCaption(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addFact({
      image: image,
      caption: caption
    }));
  };

  return (
    <form onSubmit={handleSubmit}>

      <input type="text" placeholder="Enter image url" onChange={handleImageChange} value={image} />

      <input type="text" placeholder="Add animal fact here" onChange={handleCaptionChange} value={caption} />

      <button>Add Fact</button>

    </form>
  );
};

export default FactForm;
