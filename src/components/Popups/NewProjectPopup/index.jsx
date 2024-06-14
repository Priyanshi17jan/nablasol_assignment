import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

// import icons
import { MdClose } from 'react-icons/md';

// import css
import "../style.scss"

// import from slice
import { hideNewProjectPopup } from '../../../reducers/FormSlice';

const NewProjectPopup = () => {
  const { tempFormData, currentStructure, selectedOption } = useSelector(state => state.forms);
  const { project, client, date } = tempFormData;
  console.log(tempFormData, currentStructure, selectedOption)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(hideNewProjectPopup())
  }
  return (
    <div className='project-info'>
     <h2>Added New Form</h2>
     <p>Name: {project && <span>{project}</span>} </p> 
     <p>Client: {client && <span>{client}</span>}</p>
     <p>Duration: {date && <span>{date}</span>}</p>
     <p>View: {currentStructure && <span>{currentStructure}</span>}</p>
     <p>Access to: {selectedOption && <span>{selectedOption}</span>}</p>
     <MdClose onClick={handleClose} />
    </div>
  )
}

export default NewProjectPopup