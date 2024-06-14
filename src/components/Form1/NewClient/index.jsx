import React, { useState } from 'react';

// import icons
import { MdClose } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';

// import from slice
import { addClient } from '../../../reducers/ClientSlice';
import { closeClientPopup } from '../../../reducers/FormSlice';

// import css
import "./style.scss"

function NewClient() {
  const [newClientName, setNewClientName] = useState('');
  const dispatch = useDispatch()

  const clients = useSelector(state => state.client.clients)

  const [clientError,setClientError] = useState('')

  const handleInputChange = (event) => {
    setNewClientName(event.target.value);
  };

  const handleSubmit = () => {
    if (newClientName.trim() === '') {
      setClientError('Client name is empty!')
    } else if(clients.find(client => client.toLowerCase().trim() === newClientName.toLowerCase().trim())) {
      setClientError('This client is already exist!')
    } else {
      dispatch(addClient(newClientName));
      dispatch(closeClientPopup())
      setClientError('')
      setNewClientName('');
    }
  };

  const hideClientPopup = () => {
    dispatch(closeClientPopup())
  }

  return (
    <div className='add-client-form'>
      <MdClose className="close-icon" onClick={hideClientPopup} />
      <div className='add-client-content'>
        <label htmlFor="clientName">Client Name:</label>
        <input
          type="text"
          id="clientName"
          value={newClientName}
          onChange={handleInputChange}
          placeholder="Enter client name"
        />
      </div>
      {clientError && <div className="error client-error">{clientError}</div>}
      <button onClick={() => handleSubmit()} type="button">Add Client</button>
    </div>
  );
}

export default NewClient;
