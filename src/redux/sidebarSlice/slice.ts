import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActivePage, SidebarSliceState } from './types'

const initialState: SidebarSliceState = {
  isOpen: true,
  isBubbling: false,
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
      state.isBubbling = false
    },
    setActivePage(state, action: PayloadAction<ActivePage>) {
      state.activePage = action.payload
    },
    toggleSidebar(state) {
      state.isOpen = !state.isOpen
      state.isBubbling = !state.isBubbling
    },
  },
})

export const { setSidebarClose, setSidebarOpen, setActivePage, toggleSidebar } =
  sidebarSlice.actions

export default sidebarSlice.reducer
