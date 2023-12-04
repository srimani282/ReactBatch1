import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { title as setTitleAction, subtitle as setSubtitleAction, description as setDescriptionAction } from './redux/actions/counterActions';

const ReduxComponent = () => {
  const { title, subtitle, description } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'title':
        dispatch(setTitleAction(value));
        break;
      case 'subtitle':
        dispatch(setSubtitleAction(value));
        break;
      case 'description':
        dispatch(setDescriptionAction(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className='app'>
      <p>{title} {subtitle} {description}</p>

      <input
        type="text"
        placeholder="Enter new title"
        onChange={(e) => handleInputChange('title', e.target.value)}
      />
      <button style={{ margin: "10px" }} onClick={() => handleInputChange('title')}>
        Title
      </button>

      <input
        type="text"
        placeholder="Enter new subtitle"
        onChange={(e) => handleInputChange('subtitle', e.target.value)}
      />
      <button style={{ margin: "10px" }} onClick={() => handleInputChange('subtitle')}>
        Subtitle
      </button>

      <input
        type="text"
        placeholder="Enter new description"
        onChange={(e) => handleInputChange('description', e.target.value)}
      />
      <button style={{ margin: "10px" }} onClick={() => handleInputChange('description')}>
         Description
      </button>
    </div>
  );
};

export default ReduxComponent;
