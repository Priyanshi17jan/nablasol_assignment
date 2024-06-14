import React, { useState } from 'react';

// import css
import './style.scss';

// import icons
import { MdOutlinePeopleOutline } from "react-icons/md";
import { MdPublic } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";

import { useDispatch } from 'react-redux';

// import from slice
import { decrementStep, incrementStep, updateSelectedOption } from '../../../reducers/FormSlice';

const Step3 = () => {
  const [selectedOption, setSelectedOption] = useState('Everyone');

  const dispatch = useDispatch()

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(updateSelectedOption(selectedOption))
    dispatch(incrementStep())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="who-can-manage-projects">
        <h2>Who can manage projects?</h2>
        <p>Don't panic - You can also customize these permissions in settings</p>
        <div className="options">
          <div
            className={`option ${selectedOption === 'Everyone' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('Everyone')}
          >
            <MdPublic />
            <div className="option-content">
              <label>Everyone</label>
              <p>All users can now see it, but guests cannot access the projects.</p>
            </div>
          </div>
          <div
            className={`option ${selectedOption === 'Admin' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('Admin')}
          >
            <RiAdminLine />
            <div className="option-content">
              <label>Only Admin's</label>
              <p>Only admins can manage everything.</p>
            </div>
          </div>
          <div
            className={`option ${selectedOption === 'Specific' ? 'selected' : ''}`}
            onClick={() => handleOptionChange('Specific')}
          >
            <MdOutlinePeopleOutline />
            <div className="option-content">
              <label>Only to Specific people</label>
              <p>Only some specific people can able to see it.</p>
            </div>
          </div>
        </div>
        <div className='step-navigation'>
        <span className='back-button' onClick={() => { dispatch(decrementStep()) }}>&lt; back</span>
        <input type='submit' value="Next" />
        </div>
      </div>
    </form>
  );
};

export default Step3;
