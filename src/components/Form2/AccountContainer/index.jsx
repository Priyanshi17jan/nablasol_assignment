import React from 'react'

// import css
import "./style.scss"

import { useSelector } from 'react-redux'

// import components
import BusinessInfo from '../Step2'
import AccountTabs from '../AccountTabs'
import ProfileInfo from '../Step1'

const AccountContainer = () => {

  const currentTab = useSelector(state => state.forms.currentAccountFormTab)
  return (
    <div className='account-container-box'>
      <AccountTabs activeTab={currentTab} />
      {currentTab === 1 && <ProfileInfo />}
      {currentTab === 2 && <BusinessInfo />}
    </div>
  )
}

export default AccountContainer