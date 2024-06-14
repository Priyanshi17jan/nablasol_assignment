import React, { useState } from 'react';
import NewClient from '../NewClient';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';

// import from slice
import { addTempData, decrementStep, incrementStep, showNewClientPopup } from '../../../reducers/FormSlice';

// import css
import "./style.scss"


function Step1() {
  const [formData, setFormData] = useState({
    projectName: '',
    client: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const [errors, setErrors] = useState({
    projectName: '',
    client: '',
    startDate: '',
    endDate: ''
  });

  const showClientPopup = useSelector(state => state.forms.showNewClientForm)
  const clients = useSelector(state => state.client.clients)

  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the error when the user starts typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    // Validation
    if (formData.projectName.trim() === '') {
      newErrors.projectName = 'Project name is required';
    }
    if (formData.client.trim() === '') {
      newErrors.client = 'Client is required';
    }
    if (formData.startDate.trim() === '') {
      newErrors.startDate = 'Start  and end date is required';
    } else if (new Date(formData.startDate) >= new Date(formData.endDate)) {
      newErrors.startDate = 'Start date must be before the end date'
    }

    if (formData.endDate.trim() === '') {
      newErrors.endDate = 'Start and end date is required';
    } else if (new Date(formData.endDate) <= new Date(formData.startDate)) {
        newErrors.endDate = 'End date must be after the start date'
    } 
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      dispatch(addTempData({project:formData.projectName, client:formData.client, date:formData.startDate+" to "+formData.endDate }))
      dispatch(incrementStep())
    }

  };

  const showAddClient = () => {
    dispatch(showNewClientPopup())
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Create a Project</h2>
      <div className='form-fields'>
        <label htmlFor="projectName">Project name:</label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          placeholder='Enter project name here'
          value={formData.projectName}
          onChange={handleInputChange}
        />
        {errors.projectName && <div className="error name-error">{errors.projectName}</div>}
      </div>
      <div className='form-fields'>
        <label htmlFor="client">Client:</label>
        <div className='client-fields'>
        <select
          id="client"
          name="client"
          value={formData.client}
          onChange={handleInputChange}
        >
          <option value="">Select a client</option>
          { clients && clients.map(client => {
            return <option key={uuidv4()} value={client}>{client}</option>
          })}
        </select>
        <span>or</span>
        <button type='button' onClick={() => showAddClient()}>+ new client</button>
        { showClientPopup && <NewClient />}
        </div>
        {errors.client && <div className="error client-error">{errors.client}</div>}
      </div>
      <div className='dates-section'>
      <div className='form-fields'>
        <label htmlFor="startDate">Dates:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
        />
        <span className='date-range-symbol'>-</span>
      </div>
      <div className='form-fields'>
        <label className='end-date-label' htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
        />
      </div>
      {errors.endDate && <div className="error date-error">{errors.endDate}</div>}
      </div>
      <div>
        <label htmlFor="description">Notes:</label>
        <textarea
          id="description"
          name="description"
          placeholder='Optional'
          value={formData.description}
          rows={6}
          onChange={handleInputChange}
        />
        {errors.description && <div className="error">{errors.description}</div>}
      </div>

      <div className='step-navigation'>
      <span className='back-button' onClick={() => { dispatch(decrementStep()) }}>&lt; back</span>
      <input type="submit" value="Next" />
      </div>
    </form>
  );
}

export default Step1;
