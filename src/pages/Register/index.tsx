import React, { FC } from 'react'
import { useAppDispatch } from 'redux/store'

import { AuthSubmitParams } from 'layouts/Unauthorized'
import { authRegister } from 'api/reduxAsyncThunks'
import AuthForm from 'components/Auth/AuthForm'

const RegisterPage: FC = () => {
  const appDispatch = useAppDispatch()

  const onSubmitRegister = (values: AuthSubmitParams): void => {
    appDispatch(authRegister(values))
  }

  return (
    <div>
      <AuthForm onSubmit={onSubmitRegister} />
    </div>
  )
}

export default RegisterPage
