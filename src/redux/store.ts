import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import sidebar from './sidebarSlice/slice'
import pages from './pagesSlice/slice'
import settingsPopup from './pagePopupSlice/slice'
import workspace from './workSpaceSlice/slice'

export const store = configureStore({
  reducer: {
    sidebar,
    pages,
    settingsPopup,
    workspace,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
