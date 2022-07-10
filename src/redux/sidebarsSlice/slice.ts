import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActivePage, CommentsFilters, SidebarSliceState } from './types'

const initialState: SidebarSliceState = {
  leftSidebar: {
    isOpen: true,
    isBubbling: false,
    location: 'Left',
    width: 300,
  },
  rightSidebar: {
    isOpen: false,
    location: 'Right',
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
    setActivePage(state, action: PayloadAction<ActivePage>) {
      state.activePage = action.payload
    },
    setCommentsFilter(state, action: PayloadAction<CommentsFilters>) {
      state.rightSidebar.activeCommentsFilter = action.payload
    },
    setLeftSidebarIsBubbling(state, action: PayloadAction<boolean>) {
      state.leftSidebar.isBubbling = action.payload
      state.leftSidebar.isOpen = action.payload
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
    toggleRightSidebar(state) {
      state.rightSidebar.isOpen = !state.rightSidebar.isOpen
    },
  },
})

export const {
  setLeftSidebarWidth,
  setRightSidebarWidth,
  setLeftSidebarIsBubbling,
  setCommentsFilter,
  closeLeftSidebar,
  openLeftSidebar,
  closeRightSidebar,
  openRightSidebar,
  setActivePage,
  toggleRightSidebar,
} = sidebarSlice.actions

export default sidebarSlice.reducer
