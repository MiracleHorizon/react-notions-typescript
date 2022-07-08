import React, { lazy, useState } from 'react'

import LoginLayout from './layouts/Unlogin'
import LoggedInLayout from './layouts/Login'
import AlertsContainer from './shared/Alerts/AlertsContainer'
import { AppWrapper } from './styles/App.styles'

const PopupsContainer = lazy(() => import('components/Popups/PopupsContainer'))

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <AppWrapper>
      {isLoggedIn ? <LoggedInLayout /> : <LoginLayout />}
      {/*<LoggedInLayout />*/}
      <PopupsContainer />
      <AlertsContainer />
    </AppWrapper>
  )
}

export default App
