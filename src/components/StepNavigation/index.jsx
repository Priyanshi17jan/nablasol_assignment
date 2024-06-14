import React from 'react'
import {v4 as uuidv4} from 'uuid'

// import css
import "./style.scss"

const StepNavigation = ({ activeStep }) => {
  const steps = [1, 2, 3, 4];

  return (
    <ul className="step-navigation">
      {steps.map((step, index) => (
        <li
          key={uuidv4()}
          className={`step-navigation-item ${activeStep - 1 === index ? 'active' : ''}`}
        >
          {step}
        </li>
      ))}
    </ul>
  );
}

export default StepNavigation