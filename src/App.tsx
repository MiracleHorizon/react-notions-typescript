import React, { useState } from 'react'

import LoginLayout from './layouts/Unlogin'
import WorkspacePage from './pages/WorkspacePage'
import LoggedInLayout from './layouts/Login'

import { AppWrapper } from './styles/App.styles'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <AppWrapper>
      {/*{isLoggedIn ? <WorkspacePage /> : <LoginLayout />}*/}
      <LoggedInLayout />
    </AppWrapper>
  )
}

export default App
