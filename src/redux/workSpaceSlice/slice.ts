import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CoverColors, IWorkspacePage, IWorkspaceSliceState } from './types'
import { PageTemplates } from '../popupsSlice/types'
import vue3Svg from 'assets/img/technologies/vue3.svg'
import reactSvg from 'assets/img/technologies/react.svg'

const initialState: IWorkspaceSliceState = {
  pages: [
    {
      id: 1,
      pageTitle: 'React + TypeScript',
      cover: CoverColors.YELLOW,
      icon: '',
      isFullWidth: true,
      isSmallText: false,
      template: PageTemplates.BOARD,
      isHasCover: true,
      isHasIcon: false,
      isHasComments: false,
      isFavorite: true,
    },
    {
      id: 2,
      pageTitle: 'Redux + TypeScript',
      cover: CoverColors.WHITE,
      icon: `${reactSvg}`,
      template: PageTemplates.BOARD,
      isFullWidth: false,
      isSmallText: false,
      isHasIcon: true,
      isHasCover: false,
      isHasComments: false,
      isFavorite: false,
    },
    {
      id: 3,
      pageTitle: 'React',
      template: PageTemplates.BOARD,
      isFullWidth: true,
      isSmallText: false,
      cover: CoverColors.YELLOW,
      icon: `${vue3Svg}`,
      isHasIcon: true,
      isHasCover: true,
      isHasComments: false,
      isFavorite: true,
    },
    {
      id: 4,
      pageTitle: 'Redux',
      template: PageTemplates.BOARD,
      isFullWidth: true,
      isSmallText: false,
      cover: CoverColors.WHITE,
      icon: `${reactSvg}`,
      isHasCover: false,
      isHasIcon: true,
      isHasComments: false,

      isFavorite: true,
    },
    {
      id: 5,
      pageTitle: 'NodeJS',
      template: PageTemplates.BOARD,
      isFullWidth: false,
      isSmallText: false,
      cover: CoverColors.PINK,
      icon: `${vue3Svg}`,
      isHasCover: true,
      isHasIcon: true,
      isHasComments: false,

      isFavorite: false,
    },
    {
      id: 6,
      pageTitle: 'Angular',
      cover: CoverColors.BEIGE,
      icon: `${reactSvg}`,
      template: PageTemplates.BOARD,
      isFullWidth: true,
      isSmallText: false,
      isHasCover: true,
      isHasComments: false,

      isHasIcon: true,
      isFavorite: false,
    },
    {
      id: 7,
      pageTitle: 'Vue 3',
      cover: CoverColors.RED,
      icon: `${vue3Svg}`,
      isHasCover: true,
      template: PageTemplates.BOARD,
      isFullWidth: true,
      isSmallText: false,
      isHasComments: false,
      isHasIcon: true,
      isFavorite: true,
    },
  ],
  currentPage: {
    id: 7,
    pageTitle: 'Vue 3',
    cover: CoverColors.RED,
    icon: `${vue3Svg}`,
    isHasCover: true,
    template: PageTemplates.BOARD,
    isFullWidth: true,
    isSmallText: false,
    isHasComments: false,
    isHasIcon: true,
    isFavorite: true,
  },
}

export const workSpaceSlice = createSlice({
  name: 'workspace',

  initialState: initialState,

  reducers: {
    createNewPage(state, action: PayloadAction<IWorkspacePage>) {
      const newPage = action.payload //*

      state.pages = [...state.pages, action.payload]

      console.log(newPage)
    },
    deletePage(state, action) {
      state.pages = state.pages.filter(page => page.id !== action.payload)
    },
    setCurrentPage(state, action) {
      const page = state.pages.find(page => page.id === action.payload)

      if (page) state.currentPage = page
      document.title = state.currentPage.pageTitle //!
    },
    setPageTitle(state, action) {
      const [pageTitle, pageId] = action.payload
      const page = state.pages.find(page => page.id === pageId)

      if (!page) return
      state.currentPage.pageTitle = pageTitle
      page.pageTitle = pageTitle
    },
    setPageIcon(state, action) {
      const { icon, pageId } = action.payload
      const page = state.pages.find(page => page.id === pageId)

      if (!page) return
      page.isHasIcon = true
      page.icon = icon
      state.currentPage.isHasIcon = true
      state.currentPage.icon = action.payload
    },
    setPageCover(state, action) {
      const { cover, id } = action.payload
      const page = state.pages.find(page => page.id === id)

      if (!page) return
      page.isHasCover = true
      page.cover = cover
      state.currentPage.isHasCover = true
      state.currentPage.cover = cover
    },
    removeIcon(state, action) {
      const page = state.pages.find(page => page.id === action.payload)

      if (!page) return
      page.isHasIcon = false
      page.icon = '' //!
      state.currentPage.isHasIcon = false
      state.currentPage.icon = action.payload
    },
    removeCover(state, action) {
      const page = state.pages.find(page => page.id === action.payload)

      if (!page) return
      page.isHasCover = false
      page.cover = CoverColors.WHITE
      state.currentPage.cover = CoverColors.WHITE
      state.currentPage.isHasCover = false
    },
    toggleFavorite(state, action) {
      const page = state.pages.find(page => page.id === action.payload)

      if (!page) return
      state.currentPage.isFavorite = !state.currentPage.isFavorite
      page.isFavorite = !page.isFavorite
    },
    toggleFullWidth(state, action) {
      const page = state.pages.find(page => page.id === action.payload)

      if (!page) return
      state.currentPage.isFullWidth = !state.currentPage.isFullWidth
      page.isFullWidth = !page.isFullWidth
    },
    toggleSmallText(state, action) {
      const page = state.pages.find(page => page.id === action.payload)

      if (!page) return
      state.currentPage.isSmallText = !state.currentPage.isSmallText
      page.isSmallText = !page.isSmallText
    },
  },
})

export const {
  createNewPage,
  setCurrentPage,
  setPageTitle,
  setPageCover,
  setPageIcon,
  removeCover,
  removeIcon,
  toggleFavorite,
  toggleFullWidth,
  toggleSmallText,
} = workSpaceSlice.actions

export default workSpaceSlice.reducer
