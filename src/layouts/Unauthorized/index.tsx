import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppDispatch } from 'redux/store'

import HomePage from 'pages/Home'
import AuthForm from 'components/Auth/AuthForm'
import { authLogin, authRegister } from 'api/reduxAsyncThunks'
import Wrapper from './UnauthorizedLayout.styles'

export interface AuthSubmitParams {
  email: string
  password: string
}

const UnauthorizedLayout: FC = () => {
  return (
    <Wrapper>
      <Routes>
        {/*<Route path='/' element={<HomePage />} />*/}
        {/*<Route path='/login' element={<AuthForm onSubmit={onSubmitLogin} />} />*/}
        {/*<Route*/}
        {/*  path='/register'*/}
        {/*  element={<AuthForm onSubmit={onSubmitRegister} />}*/}
        {/*/>*/}
      </Routes>
    </Wrapper>
  )
}

export default UnauthorizedLayout
