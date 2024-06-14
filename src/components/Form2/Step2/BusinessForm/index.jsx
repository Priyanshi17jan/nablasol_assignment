// FormComponent.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import css
import './style.scss';

import { useDispatch, useSelector } from 'react-redux';

// import icons
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

// import from slice
import { decrementCurrentAccTab, showRegisterPopup } from '../../../../reducers/FormSlice';
import { addUser } from '../../../../reducers/AuthSlice';

const FormComponent = () => {
  // State variables for form fields and errors
  const [brandName, setBrandName] = useState('');
  const [brandType, setBrandType] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [textIdNumber, setTextIdNumber] = useState('');
  const [brandNameError, setBrandNameError] = useState('');
  const [brandTypeError, setBrandTypeError] = useState('');
  const [streetAddressError, setStreetAddressError] = useState('');
  const [cityError, setCityError] = useState('');
  const [zipCodeError, setZipCodeError] = useState('');
  const [textIdNumberError, setTextIdNumberError] = useState('');

  const tempUser = useSelector(state => state.auth.tempUser)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    // Brand Name validation
    if (brandName.trim() === '') {
      setBrandNameError('Brand Name is required');
      formIsValid = false;
    } else {
      setBrandNameError('');
    }

    // Brand Type validation
    if (brandType.trim() === '') {
      setBrandTypeError('Brand Type is required');
      formIsValid = false;
    } else {
      setBrandTypeError('');
    }

    // Street Address validation
    if (streetAddress.trim() === '') {
      setStreetAddressError('Street Address is required');
      formIsValid = false;
    } else {
      setStreetAddressError('');
    }

    // City validation
    const cityRegex = /^[A-Za-z\s]+$/
    if (city.trim() === '') {
      setCityError('City is required');
      formIsValid = false;
    } else if(!city.trim().match(cityRegex)){
      setCityError('Invalid city name');
      formIsValid = false;
    } else {
      setCityError('');
    }

    // Zip code validation
    const zipRegex = /^[0-9]{6}$/
    if (zipCode.trim() === '') {
      setZipCodeError('Zip code is required')
      formIsValid = false;
    } else if(!zipCode.match(zipRegex)) { 
      setZipCodeError('Zip code should be 6 digits');
      formIsValid = false;
    } else {
      setZipCodeError('');
    }

    // Text ID number validation
    if (textIdNumber.trim() === '') {
      setTextIdNumberError('Text ID number is required');
      formIsValid = false;
    } else {
      setTextIdNumberError('');
    }

    // If form is valid, perform form submission
    if (formIsValid) {
      dispatch(addUser(tempUser))
      dispatch(showRegisterPopup())
    }
  };

  const handlePrevStep = () => {
    dispatch(decrementCurrentAccTab())
  }

  return (
    <div className="form-container">
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='form-section-title'>GENERAL INFORMATION</h3>
        <div className="row">
          <div className="input-group">
          <label>Brand Name*</label>
          <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
          {brandNameError && <span className="error">{brandNameError}</span>}
          </div>
          <div className="input-group brand-type-section">
          <label>Brand Type* <FaQuestionCircle className='question-mark-icon' />
          <div className="hover-pop-up">
              <p>Local: Brands with distributions in 3 divisions or less OR multiple divisions but a total of 150 stores or less.</p>
              <p>National:Brands with distribution in 4 or more divisions or in more than 150 stores.</p>
            </div>
           </label>
          <input list="brandType" value={brandType} onChange={(e) => setBrandType(e.target.value)} />
          <datalist id="brandType">
            <option value="Brand 1" />
            <option value="Brand 2" />
            <option value="Brand 3" />
          </datalist>
          {brandTypeError && <span className="error">{brandTypeError}</span>}
          </div>
        </div>
        <div className="row">
          <div className='input-group'>
          <label>Street Address*</label>
          <input type="text" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
          {streetAddressError && <span className="error">{streetAddressError}</span>}
          </div>
          <div className='input-group'>
          <label>City*</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          {cityError && <span className="error">{cityError}</span>}
          </div>
        </div>
        <div className="row">
        <div className='input-group'>
          <label>Zip code*</label>
          <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          {zipCodeError && <span className="error">{zipCodeError}</span>}
          </div>
          <div className='input-group'>
          <label>Text ID number*</label>
          <input type="text" value={textIdNumber} onChange={(e) => setTextIdNumber(e.target.value)} />
          {textIdNumberError && <span className="error">{textIdNumberError}</span>}
          </div>
        </div>

        <h3 className='form-section-title'>DOCUMENTS</h3>
        <div className="document-field">
          <label>Once the following documents are signed, you'll be ready to get started.</label>
          <div className="document-field-content">
          <input type="text" value="Electronically sign the agreement(s)" readOnly />
          <button type='button' className='right-icon-btn'>{<RiArrowRightSLine />}</button>
          <FaCheck className='green-check' />
          </div>
        </div>
        <div className="document-field">
          <div className="document-field-content">
          <input type="text" value="Non adult beverage kroger market supplier wavier and release" readOnly />
          <button type='button' className='right-icon-btn'>{<RiArrowRightSLine />}</button>
          <FaCheck className='green-check' />
          </div>
          
        </div>
        <h3 className='form-section-title'>COI PDF UPLOAD</h3>
        <div className="document-field">
          <label>Once the following documents are signed, you'll be ready to get started.</label>
          <div className="document-field-content">
          <input type="text" value="Electronically sign the agreement(s)" readOnly />
          <button type='button' className='right-icon-btn'>{<RiArrowRightSLine />}</button>
          <FaCheck className='green-check' />
          </div>
        </div>
        <Link to="/" className='back-to-login'><RiArrowLeftSLine /> Back to Login</Link>
        <div className="account-step-navigation">
        <input type="button" className='prev-step-btn' value='Previous Step' onClick={handlePrevStep} />
        <RiArrowLeftSLine className='left-arrow-icon' />
        <input type="submit" className='next-step-btn' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
