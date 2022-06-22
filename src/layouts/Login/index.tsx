import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../../pages/HomePage'
import WorkspacePage from '../../pages/WorkspacePage'
import LoginLayout from '../Unlogin'

const LoggedInLayout: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginLayout />}></Route>
      <Route path='/workspace' element={<WorkspacePage />} />
    </Routes>
  )
}

export default LoggedInLayout
