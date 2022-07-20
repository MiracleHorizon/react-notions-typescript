import React, { FC } from 'react'
import { useAppDispatch } from 'redux/store'

import { AuthSubmitParams } from 'layouts/Unauthorized'
import AuthForm from 'components/Auth/AuthForm'
import { authLogin } from 'api/reduxAsyncThunks'

const LoginPage: FC = () => {
  const appDispatch = useAppDispatch()

  const onSubmitLogin = (values: AuthSubmitParams): void => {
    appDispatch(authLogin(values))
  }

  return (
    <div>
      <AuthForm onSubmit={onSubmitLogin} />
    </div>
  )
}

export default LoginPage
