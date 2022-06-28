import { RootState } from '../store'

const isSidebarOpenSelector = (state: RootState) => state.sidebar.isOpen
const activeItemSelector = (state: RootState) => state.sidebar.activeItem

export { isSidebarOpenSelector, activeItemSelector }
