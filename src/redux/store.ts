import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import workspace from './workSpaceSlice/slice'
import sidebar from './sidebarsSlice/slice'
import pageDecoration from './pageDecorationSlice/slice'
import recentSearch from './recentSearchSlice/slice'
import popups from './popupsSlice/slice'
import alerts from './alertsSlice/slice'

export const store = configureStore({
  reducer: {
    sidebar,
    workspace,
    recentSearch,
    pageDecoration,
    popups,
    alerts,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
