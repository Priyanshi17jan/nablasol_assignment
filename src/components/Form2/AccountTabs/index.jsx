import React from 'react';

// import css
import './style.scss';

const AccountTabs = ({ activeTab }) => {
  const tabStructures = {
    active1: (
      <>
        <div className='tab active'>
          <li><span className='step-count'>1</span> Your Profile</li>
        </div>
        <div className='tab'>
        <span className='step-count'>2</span> Business Information
        </div>
        <div className='tab'>
        <span className='step-count'>3</span> Additional Users
        </div>
      </>
    ),
    active2: (
      <>
        <div className='tab active flex-grow'>
        <li><span className='step-count'>1</span> Your Profile</li>
        <li><span className='step-count'>2</span> Business Information</li>
        </div>
        <div className='tab'><span className='step-count'>3</span> Additional Users</div>
      </>
    ),
    // Add more tab structures as needed
  };

  return (
    <div className="tabs">
      {tabStructures[`active${activeTab}`]}
    </div>
  );
};

export default AccountTabs;
