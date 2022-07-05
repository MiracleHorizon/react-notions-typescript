import React from 'react'
import { Route, Routes } from 'react-router-dom'

import WorkspacePage from '../../pages/WorkspacePage'
import LoginLayout from '../Unlogin'

const LoggedInLayout: React.FC = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginLayout />}></Route>
      <Route path='/' element={<WorkspacePage />} />
    </Routes>
  )
}

export default LoggedInLayout
