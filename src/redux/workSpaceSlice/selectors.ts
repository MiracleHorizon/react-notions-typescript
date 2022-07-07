import { RootState } from '../store'
import { IWorkspacePage, PageFontFamilies } from './types'

const currentPageSelector = (state: RootState): IWorkspacePage => {
  return state.workspace.currentPage
}
const workspacePagesSelector = (state: RootState): IWorkspacePage[] | [] => {
  return state.workspace.pages
}
const favoritePagesSelector = (state: RootState): IWorkspacePage[] | [] => {
  return state.workspace.pages.filter(page => page.isFavorite)
}
const commonPagesSelector = (state: RootState): IWorkspacePage[] | [] => {
  return state.workspace.pages.filter(page => !page.isFavorite)
}
const recentlyDeletedPagesSelector = (
  state: RootState
): IWorkspacePage[] | [] => {
  return state.workspace.recentlyDeleted
}
const currentPageFontFamilySelector = (state: RootState): PageFontFamilies => {
  return state.workspace.currentPage.pageSettings.selectedFont
}
const currentPageFontSizeSelector = (state: RootState): boolean => {
  return state.workspace.currentPage.pageSettings.isSmallText
}

export {
  currentPageSelector,
  workspacePagesSelector,
  favoritePagesSelector,
  commonPagesSelector,
  recentlyDeletedPagesSelector,
  currentPageFontFamilySelector,
  currentPageFontSizeSelector,
}
