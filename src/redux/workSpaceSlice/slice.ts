import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CoverColors, IWorkspacePage, WorkspaceSliceState } from './types'
import { PageTemplates } from '../popupsSlice/types'
import vue3Svg from 'assets/img/technologies/vue3.svg'
import reactSvg from 'assets/img/technologies/react.svg'
import reactPng from 'assets/img/react.png'
import avatarKermitJpg from 'assets/img/Avatar1.jpg'

const initialState: WorkspaceSliceState = {
  pages: [
    {
      id: 1,
      title: 'React + TypeScript',
      cover: CoverColors.YELLOW,
      icon: '',
      comments: [],
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
      title: 'Redux + TypeScript',
      cover: CoverColors.WHITE,
      icon: `${reactPng}`,
      template: PageTemplates.BOARD,
      isFullWidth: false,
      isSmallText: false,
      isHasIcon: true,
      isHasCover: false,
      isHasComments: false,
      isFavorite: false,
      comments: [],
    },
    {
      id: 3,
      title: 'React',
      template: PageTemplates.BOARD,
      isFullWidth: true,
      isSmallText: false,
      cover: CoverColors.YELLOW,
      icon: `${vue3Svg}`,
      isHasIcon: true,
      isHasCover: true,
      isHasComments: false,
      isFavorite: true,
      comments: [{ title: '' }],
    },
    {
      id: 4,
      title: 'Redux',
      template: PageTemplates.BOARD,
      isFullWidth: true,
      isSmallText: false,
      cover: CoverColors.WHITE,
      icon: `${reactSvg}`,
      isHasCover: false,
      isHasIcon: true,
      isHasComments: false,
      comments: [],

      isFavorite: true,
    },
    {
      id: 5,
      title: 'NodeJS',
      template: PageTemplates.BOARD,
      isFullWidth: false,
      isSmallText: false,
      cover: CoverColors.PINK,
      icon: `${vue3Svg}`,
      isHasCover: true,
      isHasIcon: true,
      isHasComments: false,
      comments: [],

      isFavorite: false,
    },
    {
      id: 6,
      title: 'Angular',
      cover: CoverColors.BEIGE,
      icon: `${reactSvg}`,
      template: PageTemplates.BOARD,
      isFullWidth: true,
      isSmallText: false,
      isHasCover: true,
      isHasComments: false,
      comments: [],

      isHasIcon: true,
      isFavorite: false,
    },
    {
      id: 7,
      title: 'Kermit Notions',
      cover: CoverColors.RED,
      icon: `${avatarKermitJpg}`,
      isHasCover: true,
      template: PageTemplates.BOARD,
      isFullWidth: true,
      isSmallText: false,
      isHasComments: false,
      isHasIcon: true,
      isFavorite: true,
      comments: [],
    },
  ],
  currentPage: {
    id: 7,
    title: 'Kermit Notions',
    cover: CoverColors.RED,
    icon: `${avatarKermitJpg}`,
    isHasCover: true,
    template: PageTemplates.BOARD,
    isFullWidth: true,
    isSmallText: false,
    isHasComments: false,
    isHasIcon: true,
    isFavorite: true,
    comments: [],
  },
}

export const workSpaceSlice = createSlice({
  name: 'workspace',

  initialState: initialState,

  reducers: {
    createNewPage(state, action: PayloadAction<IWorkspacePage>) {
      state.pages = [...state.pages, action.payload]
    },
    deletePage(state, action) {
      state.pages = state.pages.filter(page => page.id !== action.payload)
    },
    setCurrentPage(state, action) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      state.currentPage = page
    },
    setPageTitle(state, action) {
      const [title, id] = action.payload
      const page = state.pages.find(page => page.id === id)
      if (!page) return

      state.currentPage.title = title
      page.title = title
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
      const { id, cover } = action.payload
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
    addToFavorite(state, action: PayloadAction<number>) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      state.currentPage.isFavorite = true
      page.isFavorite = true
    },
    removeFavorite(state, action: PayloadAction<number>) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      state.currentPage.isFavorite = false
      page.isFavorite = false
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
  deletePage,
  setCurrentPage,
  setPageTitle,
  setPageCover,
  setPageIcon,
  removeCover,
  removeIcon,
  toggleFavorite,
  toggleFullWidth,
  toggleSmallText,
  addToFavorite,
  removeFavorite,
} = workSpaceSlice.actions

export default workSpaceSlice.reducer
