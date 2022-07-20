import { RootState } from 'redux/store'

const leftSidebarStateSelector = (state: RootState) => {
  return state.sidebars.leftSidebarState
}

const rightSidebarStateSelector = (state: RootState) => {
  return state.sidebars.rightSidebarState
}

const selectedPageSelector = (state: RootState) => {
  return state.sidebars.selectedPage
}

const activeCommentsFilterSelector = (state: RootState) => {
  return state.sidebars.rightSidebarState.activeCommentsFilter
}

export {
  leftSidebarStateSelector,
  rightSidebarStateSelector,
  selectedPageSelector,
  activeCommentsFilterSelector,
}
