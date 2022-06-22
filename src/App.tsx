import React, { useState } from 'react'

import LoginLayout from './layouts/Unlogin'
import WorkspacePage from './pages/WorkspacePage'
import LoggedInLayout from './layouts/Login'

import './styles/App.scss'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='notions-app'>
      {/*{isLoggedIn ? <WorkspacePage /> : <LoginLayout />}*/}
      <LoggedInLayout />
    </div>
  )
}

export default App
