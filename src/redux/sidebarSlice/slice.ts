import { createSlice } from '@reduxjs/toolkit'
import { ISidebarSliceState } from './types'

const initialState: ISidebarSliceState = {
  isOpen: true,
  isHover: false,
  activeItem: 0,
}

const sidebarSlice = createSlice({
  name: 'sidebar',

  initialState: initialState,

  reducers: {
    setActiveItem(state, action): void {
      state.activeItem = action.payload
    },
    setSidebarClose(state): void {
      state.isOpen = false
    },
    setSidebarOpen(state): void {
      state.isOpen = true
    },
    setIsHover(state): void {
      state.isHover = true
    },
    setIsNotHover(state): void {
      state.isHover = false
    },
  },
})

export const {
  setActiveItem,
  setSidebarClose,
  setSidebarOpen,
  setIsHover,
  setIsNotHover,
} = sidebarSlice.actions

export default sidebarSlice.reducer
