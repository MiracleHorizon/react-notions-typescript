import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActivePage, SidebarSliceState } from './types'

const initialState: SidebarSliceState = {
  isOpen: true,
  activePage: {
    title: '',
    id: 0,
  },
}

const sidebarSlice = createSlice({
  name: 'sidebar',

  initialState: initialState,

  reducers: {
    setSidebarClose(state) {
      state.isOpen = false
    },
    setSidebarOpen(state) {
      state.isOpen = true
    },
    setActivePage(state, action: PayloadAction<ActivePage>) {
      state.activePage = action.payload
    },
  },
})

export const { setSidebarClose, setSidebarOpen, setActivePage } =
  sidebarSlice.actions

export default sidebarSlice.reducer
