import { RootState } from '../store'
import { IWorkspacePage } from './types'

const currentPageSelector = (state: RootState): IWorkspacePage => {
  return state.workspace.currentPage
}
const workspacePagesSelector = (state: RootState): IWorkspacePage[] | [] => {
  return state.workspace.pages
}
const favoritePagesSelector = (state: RootState): IWorkspacePage[] | [] => {
  return state.workspace.pages.filter(page => page.isFavorite)
}
const privatePagesSelector = (state: RootState): IWorkspacePage[] | [] => {
  return state.workspace.pages.filter(page => !page.isFavorite)
}

export {
  currentPageSelector,
  workspacePagesSelector,
  favoritePagesSelector,
  privatePagesSelector,
}
