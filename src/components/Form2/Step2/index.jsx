import React from 'react'

// import component
import BusinessForm from './BusinessForm'

// import css
import "./style.scss"

const BusinessInfo = () => {
  return (
    <>
      <span className='step-counter'>Step 2</span>
      <h2 className='profile-form-title'>Business Information</h2>
      <p className="instructions">
        Please, enter information about your company.
      </p>
      <BusinessForm />
    </>
  )
}

export default BusinessInfo