import React, { lazy, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import LoginLayout from './layouts/Unlogin'
import LoggedInLayout from './layouts/Login'
import AlertsContainer from './shared/Alerts/AlertsContainer'
import { currentPageSelector } from './redux/workSpaceSlice/selectors'
import { AppWrapper } from './styles/App.styles'

const PopupsContainer = lazy(() => import('components/Popups/PopupsContainer'))

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const { title } = useSelector(currentPageSelector)

  useEffect(() => {
    document.title = title
  }, [title])

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
