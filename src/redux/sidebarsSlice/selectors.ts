import { RootState } from '../store'

const sidebarsStateSelector = (state: RootState) => state.sidebar
const leftSidebarSelector = (state: RootState) => state.sidebar.leftSidebar
const rightSidebarSelector = (state: RootState) => state.sidebar.rightSidebar
const activePageSelector = (state: RootState) => state.sidebar.activePage

export {
  sidebarsStateSelector,
  leftSidebarSelector,
  rightSidebarSelector,
  activePageSelector,
}
