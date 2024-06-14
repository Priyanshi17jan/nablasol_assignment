import React from 'react'

// import css
import "./style.scss"

// import components
import AccountContainer from '../../components/Form2/AccountContainer'
import Overlay from '../../components/Overlay'
import RegisterSuccess from '../../components/Popups/RegisterSuccess'

import { useSelector } from 'react-redux'

const CreateAccount = () => {

  const showRegisterPopup = useSelector(state => state.forms.showRegisterPopup) 
  return (
    <div className='create-account-container'>
    <h2 className='create-title'>Create New Account</h2>
    <AccountContainer />
    {showRegisterPopup && <Overlay /> }
    {showRegisterPopup && <RegisterSuccess /> }
    </div>
  )
}

export default CreateAccount