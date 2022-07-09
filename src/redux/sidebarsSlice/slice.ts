import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActivePage, CommentsFilters, SidebarSliceState } from './types'
import { SidebarLocations } from 'components/Workspace/Sidebar/Sidebar.types'

const initialState: SidebarSliceState = {
  leftSidebar: {
    isOpen: true,
    isBubbling: false,
    location: SidebarLocations.LEFT,
    width: 300,
  },
  rightSidebar: {
    isOpen: true,
    location: SidebarLocations.RIGHT,
    activeCommentsFilter: CommentsFilters.OPEN,
    width: 400,
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
    setLeftSidebarWidth(state, action: PayloadAction<number>) {
      state.leftSidebar.width = action.payload
    },
    setRightSidebarWidth(state, action: PayloadAction<number>) {
      state.rightSidebar.width = action.payload
    },
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
    setCommentsFilter(state, action: PayloadAction<CommentsFilters>) {
      state.rightSidebar.activeCommentsFilter = action.payload
    },
  },
})

export const {
  setLeftSidebarWidth,
  setRightSidebarWidth,
  setCommentsFilter,
  closeLeftSidebar,
  openLeftSidebar,
  closeRightSidebar,
  openRightSidebar,
  setActivePage,
  toggleLeftSidebar,
  toggleRightSidebar,
} = sidebarSlice.actions

export default sidebarSlice.reducer
