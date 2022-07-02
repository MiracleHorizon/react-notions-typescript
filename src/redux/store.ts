import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import sidebar from './sidebarsSlice/slice'
import workspace from './workSpaceSlice/slice'
import pageDecoration from './pageDecorationSlice/slice'
import recentSearch from './recentSearchSlice/slice'
import options from './optionsSlice/slice'
import popups from './popupsSlice/slice'
import modals from './modalsSlice/slice'

export const store = configureStore({
  reducer: {
    sidebar,
    workspace,
    recentSearch,
    pageDecoration,
    options,
    modals,
    popups,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
