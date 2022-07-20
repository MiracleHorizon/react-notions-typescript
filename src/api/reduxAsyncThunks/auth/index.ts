import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'api/axios'
import { AuthParams } from './types'
import { IUser } from 'models/user'

export const authRegister = createAsyncThunk<IUser, AuthParams>(
  'auth/register',
  async params => {
    const { data } = await axios.post('/register', params)

    return data as IUser
  }
)

export const authLogin = createAsyncThunk<IUser, AuthParams>(
  'auth/login',
  async params => {
    const { data } = await axios.post('/login', params)

    return data as IUser
  }
)

export const authAbout = createAsyncThunk<IUser>('auth/about', async () => {
  const { data } = await axios.get('/about')

  return data as IUser
})
