import React, { useState } from 'react';

// import icons
import { FaList, FaClipboard } from 'react-icons/fa';

// import css
import './style.scss';

import { useDispatch } from 'react-redux';

// import from slice
import { decrementStep, incrementStep, updateCurrentStructure } from '../../../reducers/FormSlice';

function ContainerSelection() {
  const [selectedContainer, setSelectedContainer] = useState("list");

  const dispatch = useDispatch()

  const handleContainerClick = (containerType) => {
    setSelectedContainer(containerType);
  };

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(updateCurrentStructure(selectedContainer))
    dispatch(incrementStep())
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Select a view</h2>
      <p>You can also customize these views in settings</p>
    <div className="container-selection">
      <div
        className={`container ${selectedContainer === 'list' ? 'selected' : ''}`}
        onClick={() => handleContainerClick('list')}
      >
        <FaList className="icon" />
        <span className='structure-title'>List</span>
      </div>
      <div
        className={`container ${selectedContainer === 'board' ? 'selected' : ''}`}
        onClick={() => handleContainerClick('board')}
      >
        <FaClipboard className="icon" />
        <span className='structure-title'>Board</span>
      </div>
    </div>
    <div className='step-navigation'>
    <span className='back-button' onClick={() => { dispatch(decrementStep()) }}>&lt; back</span>
    <input type='submit' value="Next" />
    </div>
    </form>
  );
}

export default ContainerSelection;