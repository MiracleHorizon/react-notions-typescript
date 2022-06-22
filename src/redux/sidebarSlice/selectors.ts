import { RootState } from '../store'

const isSidebarOpenSelector = (state: RootState) => state.sidebar.isOpen
const isHoverOnSidebarSelector = (state: RootState) => state.sidebar.isHover
const activeItemSelector = (state: RootState) => state.sidebar.activeItem

export { isSidebarOpenSelector, activeItemSelector, isHoverOnSidebarSelector }
