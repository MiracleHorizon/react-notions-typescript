import { RootState } from '../store'

const leftSidebarSelector = (state: RootState) => state.sidebar.leftSidebar
const rightSidebarSelector = (state: RootState) => state.sidebar.rightSidebar
const activePageSelector = (state: RootState) => state.sidebar.activePage

export { leftSidebarSelector, rightSidebarSelector, activePageSelector }
