import { createSlice } from '@reduxjs/toolkit'

import AuthState from './types'
import { LoadingStatuses } from 'api/types'
import { authRegister, authLogin, authAbout } from 'api/reduxAsyncThunks'

const initialState: AuthState = {
  user: null,
  loadingStatus: LoadingStatuses.IDLE,
}

export const authSlice = createSlice({
  name: 'auth',

  initialState: initialState,

  reducers: {
    logout(state) {
      state.user = null
      state.loadingStatus = LoadingStatuses.IDLE
    },
  },

  extraReducers: builder => {
    builder.addCase(authRegister.pending, state => {
      state.user = null
      state.loadingStatus = LoadingStatuses.PENDING
    })
    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.user = action.payload
      state.loadingStatus = LoadingStatuses.SUCCEEDED
    })
    builder.addCase(authRegister.rejected, (state, action) => {
      state.user = null
      state.loadingStatus = LoadingStatuses.REJECTED

      console.error(action.error)
    })

    builder.addCase(authLogin.pending, state => {
      state.user = null
      state.loadingStatus = LoadingStatuses.PENDING
    })
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.user = action.payload
      state.loadingStatus = LoadingStatuses.SUCCEEDED

      if (action.payload?.token) {
        window.localStorage.setItem('jwt', action.payload.token)
      }
    })
    builder.addCase(authLogin.rejected, (state, action) => {
      state.user = null
      state.loadingStatus = LoadingStatuses.REJECTED

      console.error(action.error)
    })

    builder.addCase(authAbout.pending, state => {
      state.user = null
      state.loadingStatus = LoadingStatuses.PENDING
    })
    builder.addCase(authAbout.fulfilled, (state, action) => {
      state.user = action.payload
      state.loadingStatus = LoadingStatuses.SUCCEEDED
    })
    builder.addCase(authAbout.rejected, (state, action) => {
      state.user = null
      state.loadingStatus = LoadingStatuses.REJECTED

      console.log(action.payload)
      console.error(action.error)
    })
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer
