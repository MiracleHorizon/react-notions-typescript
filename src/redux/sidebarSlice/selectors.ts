import { RootState } from '../store'

const isSidebarOpenSelector = (state: RootState) => state.sidebar.isOpen
const activePageSelector = (state: RootState) => state.sidebar.activePage
const sidebarStateSelector = (state: RootState) => state.sidebar

export { sidebarStateSelector, isSidebarOpenSelector, activePageSelector }
