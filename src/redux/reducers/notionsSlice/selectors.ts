import { RootState } from 'redux/store'
import { LoadingStatuses } from 'api/types'
import { INotionPage } from './types'
import objectCopier from 'helpers/objectCopier'

export const pagesSelector = (state: RootState): INotionPage[] => {
  return state.notions.pages
}

export const filteredPagesSelector = (
  state: RootState,
  pageId: string
): INotionPage[] => {
  return state.notions.pages.filter(page => page.parentPageId === pageId)
}

export const commonPagesSelector = (state: RootState): INotionPage[] => {
  return state.notions.pages.filter(
    page => !page.isFavorite && page.parentPageId === null
  )
}

export const favoritePagesSelector = (state: RootState): INotionPage[] => {
  return state.notions.pages.filter(
    page => page.isFavorite && page.parentPageId === null
  )
}

export const currentPageSelector = (state: RootState): INotionPage => {
  return state.notions.currentPage
}

export const currentPageCopySelector = (state: RootState) => {
  return objectCopier(state.notions.currentPage)
}

export const pagesLoadingStatusSelector = (
  state: RootState
): LoadingStatuses => {
  return state.notions.loadingStatus
}
