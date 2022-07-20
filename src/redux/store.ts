import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import auth from './reducers/authSlice'
import notions from './reducers/notionsSlice'
import workspace from './reducers/workSpaceSlice/slice'
import sidebars from './reducers/sidebarsSlice/slice'
import pageDecoration from './reducers/pageDecorationSlice/slice'
import quickSearch from './reducers/quickSearchSlice/slice'
import popups from './reducers/popupsSlice/slice'
import alerts from './reducers/alertsSlice/slice'

export const store = configureStore({
  reducer: {
    auth,
    notions,
    workspace,
    sidebars,
    pageDecoration,
    quickSearch,
    popups,
    alerts,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
