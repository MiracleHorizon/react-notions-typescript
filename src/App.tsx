import React, { FC, lazy, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { useAppDispatch } from 'redux/store'

import LoginPage from './pages/Login'
import WorkspacePage from './pages/Workspace'
import { authAbout } from './api/reduxAsyncThunks'
import { isAuthSelector, currentPageSelector } from 'redux/selectors'
import Wrapper from 'styles/App.styles'

const PopupsContainer = lazy(() => import('components/shared/Popups/PopupsContainer'))
const AlertsContainer = lazy(() => import('components/shared/Alerts/AlertsContainer'))

const App: FC = () => {
  const isAuth = useSelector(isAuthSelector)
  const appDispatch = useAppDispatch()
  const { title } = useSelector(currentPageSelector)

  useEffect(() => {
    document.title = isAuth && title ? title : 'React Notions'
  }, [isAuth, title])

  useEffect(() => {
    appDispatch(authAbout())
  }, [appDispatch])

  return (
    <>
      <Wrapper>
        <Routes>
          {isAuth ? (
            <Route path='/workspace' element={<WorkspacePage />} />
          ) : (
            <>
              <Route path='/' />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' />
            </>
          )}
        </Routes>
      </Wrapper>
      <PopupsContainer />
      <AlertsContainer />
    </>
  )
}

export default App
