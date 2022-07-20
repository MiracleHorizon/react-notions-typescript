import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SelectedPage, CommentsFilters, SidebarSliceState } from './types'

const initialState: SidebarSliceState = {
  leftSidebarState: {
    width: 300,
    isOpen: true,
    isBubbling: false,
    location: 'Left',
  },
  rightSidebarState: {
    width: 400,
    isOpen: false,
    location: 'Right',
    activeCommentsFilter: CommentsFilters.OPEN,
  },
  selectedPage: {
    id: '',
    title: '',
  },
}

const sidebarsSlice = createSlice({
  name: 'sidebars',

  initialState: initialState,

  reducers: {
    setLeftSidebarWidth(state, action: PayloadAction<number>) {
      state.leftSidebarState.width = action.payload
    },
    setRightSidebarWidth(state, action: PayloadAction<number>) {
      state.rightSidebarState.width = action.payload
    },
    setSelectedPage(state, action: PayloadAction<SelectedPage>) {
      state.selectedPage = action.payload
    },
    setCommentsFilter(state, action: PayloadAction<CommentsFilters>) {
      state.rightSidebarState.activeCommentsFilter = action.payload
    },
    setIsLeftSidebarBubbling(state, action: PayloadAction<boolean>) {
      state.leftSidebarState.isBubbling = action.payload
      state.leftSidebarState.isOpen = action.payload
    },
    openLeftSidebar(state) {
      state.leftSidebarState.isOpen = true
    },
    openRightSidebar(state) {
      state.rightSidebarState.isOpen = true
    },
    closeLeftSidebar(state) {
      state.leftSidebarState.isOpen = false
    },
    closeRightSidebar(state) {
      state.rightSidebarState.isOpen = false
    },
    toggleRightSidebar(state) {
      state.rightSidebarState.isOpen = !state.rightSidebarState.isOpen
    },
  },
})

export const {
  setLeftSidebarWidth,
  setRightSidebarWidth,
  setIsLeftSidebarBubbling,
  setSelectedPage,
  setCommentsFilter,
  openRightSidebar,
  openLeftSidebar,
  closeLeftSidebar,
  closeRightSidebar,
  toggleRightSidebar,
} = sidebarsSlice.actions

export default sidebarsSlice.reducer
