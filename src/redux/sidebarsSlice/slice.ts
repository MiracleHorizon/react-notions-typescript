import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActivePage, CommentsFilters, SidebarSliceState } from './types'
import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'

const initialState: SidebarSliceState = {
  leftSidebar: {
    isOpen: true,
    isBubbling: false,
    location: SidebarLocations.LEFT,
  },
  rightSidebar: {
    isOpen: false,
    location: SidebarLocations.RIGHT,
    width: 400,
    activeCommentsFilter: CommentsFilters.OPEN,
  },
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
      state.rightSidebar.isOpen = !state.rightSidebar.isOpen
    },
    setActivePage(state, action: PayloadAction<ActivePage>) {
      state.activePage = action.payload
    },
    setRightSidebarWidth(state, action: PayloadAction<number>) {
      state.rightSidebar.width = action.payload
    },
    setCommentsFilter(state, action: PayloadAction<CommentsFilters>) {
      state.rightSidebar.activeCommentsFilter = action.payload
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
  setCommentsFilter,
  toggleLeftSidebar,
  toggleRightSidebar,
} = sidebarSlice.actions

export default sidebarSlice.reducer
