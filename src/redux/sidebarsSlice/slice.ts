import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActivePage, SidebarSliceState } from './types'
import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'

const initialState: SidebarSliceState = {
  leftSidebar: {
    isOpen: true,
    isBubbling: false,
    location: SidebarLocations.LEFT,
  },
  rightSidebar: { isOpen: true, location: SidebarLocations.RIGHT, width: 400 },
  activePage: {
    title: '',
    id: -1,
  },
}

const sidebarSlice = createSlice({
  name: 'sidebar',

  initialState: initialState,

  reducers: {
    closeLeftSidebar(state) {
      state.leftSidebar.isOpen = false
    },
    openLeftSidebar(state) {
      state.leftSidebar.isOpen = true
      // state.leftSidebar.isBubbling = false
    },
    closeRightSidebar(state) {
      state.rightSidebar.isOpen = false
    },
    openRightSidebar(state) {
      state.rightSidebar.isOpen = true
    },
    toggleLeftSidebar(state) {
      // state.isOpen = !state.isOpen
      // state.isBubbling = !state.isBubbling
    },
    toggleRightSidebar(state) {
      // state.isOpen = !state.isOpen
      // state.isBubbling = !state.isBubbling
    },
    setActivePage(state, action: PayloadAction<ActivePage>) {
      state.activePage = action.payload
    },
    setRightSidebarWidth(state, action: PayloadAction<number>) {
      state.rightSidebar.width = action.payload
    },
  },
})

export const {
  closeLeftSidebar,
  openLeftSidebar,
  closeRightSidebar,
  openRightSidebar,
  setActivePage,
  setRightSidebarWidth,
  toggleLeftSidebar,
  toggleRightSidebar,
} = sidebarSlice.actions

export default sidebarSlice.reducer
