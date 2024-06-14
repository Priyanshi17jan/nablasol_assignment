import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import components
import PrivateRoutes from '../PrivateRoutes'
import Login from '../../pages/LoginPage'
import ErrorPage from '../../pages/ErrorPage'
import FormPage from '../../pages/FormPage'
import CreateAccount from '../../pages/CreateAccountPage'

const RouterComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/forms/' element={<FormPage />} />
        </Route>
        <Route path='/create' element={<CreateAccount />} />
        <Route path='*' element={<ErrorPage />} />
    </Routes>
  ) 
}

export default RouterComponent