import { RootState } from 'redux/store'

export const isAuthSelector = (state: RootState) => Boolean(state.auth.user)

export const userSelector = (state: RootState) => state.auth.user
