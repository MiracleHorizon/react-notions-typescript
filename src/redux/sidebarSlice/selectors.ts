import { RootState } from '../store'

const isSidebarOpenSelector = (state: RootState) => state.sidebar.isOpen
const activePageSelector = (state: RootState) => state.sidebar.activePage

export { isSidebarOpenSelector, activePageSelector }
