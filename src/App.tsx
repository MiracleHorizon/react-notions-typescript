import React, { useState } from 'react'

import LoginLayout from './layouts/Unlogin'
import WorkspacePage from './pages/WorkspacePage'

import './styles/App.scss'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div className='notions-app'>
      {isLoggedIn ? <WorkspacePage /> : <LoginLayout />}
    </div>
  )
}

export default App
