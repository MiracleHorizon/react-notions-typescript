import { createSlice } from '@reduxjs/toolkit'
import { ISidebarSliceState } from './types'

const initialState: ISidebarSliceState = {
  isOpen: true,
  activeItem: 0,
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
  },
})

export const { setSidebarClose, setSidebarOpen } = sidebarSlice.actions

export default sidebarSlice.reducer
