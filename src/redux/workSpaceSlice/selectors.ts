import { RootState } from '../store'
import { IWorkspacePage } from './types'

const workspacePagesSelector = (state: RootState): IWorkspacePage[] | [] => {
  return state.workspace.pages
}
const currentPageSelector = (state: RootState): IWorkspacePage => {
  return state.workspace.currentPage
}
const favoritePagesSelector = (state: RootState): IWorkspacePage[] | [] => {
  return state.workspace.pages.filter(page => page.isFavorite)
}
const privatePagesSelector = (state: RootState): IWorkspacePage[] | [] => {
  return state.workspace.pages.filter(page => !page.isFavorite)
}

export {
  workspacePagesSelector,
  currentPageSelector,
  favoritePagesSelector,
  privatePagesSelector,
}
