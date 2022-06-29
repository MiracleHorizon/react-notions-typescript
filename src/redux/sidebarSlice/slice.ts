import { createSlice } from '@reduxjs/toolkit'
import { SidebarSliceState } from './types'

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
    setSidebarClose(state): void {
      state.isOpen = false
    },
    setSidebarOpen(state): void {
      state.isOpen = true
    },
    setActivePage(state, action): void {
      state.activePage = action.payload
    },
  },
})

export const { setSidebarClose, setSidebarOpen, setActivePage } =
  sidebarSlice.actions

export default sidebarSlice.reducer
