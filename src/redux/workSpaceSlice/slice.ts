import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { PageTemplates } from 'redux/popupsSlice/types'
import {
  CoverColors,
  IWorkspacePage,
  PageFontFamilies,
  SetPageFontPayloadAction,
  WorkspaceSliceState,
} from './types'

import vue3Svg from 'assets/img/technologies/vue3.svg'
import reactPng from 'assets/img/react.png'
import avatarKermitJpg from 'assets/img/Avatar1.jpg'
import coverTest from 'assets/img/banner-test.jpg'
import woodcutsCover from 'assets/img/pageCovers/woodcuts_11.jpg'

const initialState: WorkspaceSliceState = {
  pages: [
    {
      template: PageTemplates.BOARD,
      id: 1,
      title: 'Redux',
      isFavorite: false,
      pageSettings: {
        isSmallText: false,
        isFullWidth: true,
        selectedFont: PageFontFamilies.DEFAULT,
      },
      coverInfo: {
        isHasCover: true,
        cover: `${woodcutsCover}`,
        coverType: 'imgUrl',
      },
      iconInfo: {
        isHasIcon: true,
        icon: `${vue3Svg}`,
      },
      commentsInfo: {
        isHasComments: false,
        comments: [],
      },
    },
    {
      template: PageTemplates.BOARD,
      id: 2,
      title: 'React',
      isFavorite: true,
      pageSettings: {
        isSmallText: false,
        isFullWidth: true,
        selectedFont: PageFontFamilies.DEFAULT,
      },
      coverInfo: {
        isHasCover: true,
        cover: CoverColors.RED,
        coverType: 'CoverColors',
      },
      iconInfo: {
        isHasIcon: true,
        icon: `${reactPng}`,
      },
      commentsInfo: {
        isHasComments: false,
        comments: [],
      },
    },
    {
      template: PageTemplates.BOARD,
      id: 3,
      title: 'Typescript',
      isFavorite: false,
      pageSettings: {
        isSmallText: false,
        isFullWidth: false,
        selectedFont: PageFontFamilies.DEFAULT,
      },
      coverInfo: {
        isHasCover: true,
        cover: CoverColors.RED,
        coverType: 'CoverColors',
      },
      iconInfo: {
        isHasIcon: true,
        icon: `${avatarKermitJpg}`,
      },
      commentsInfo: {
        isHasComments: false,
        comments: [],
      },
    },
    {
      template: PageTemplates.BOARD,
      id: 4,
      title: 'Redux',
      isFavorite: true,
      pageSettings: {
        isSmallText: false,
        isFullWidth: true,
        selectedFont: PageFontFamilies.DEFAULT,
      },
      coverInfo: {
        isHasCover: true,
        cover: CoverColors.RED,
        coverType: 'CoverColors',
      },
      iconInfo: {
        isHasIcon: true,
        icon: `${vue3Svg}`,
      },
      commentsInfo: {
        isHasComments: false,
        comments: [],
      },
    },
  ],
  currentPage: {
    template: PageTemplates.BOARD,
    id: 1,
    title: 'Redux',
    isFavorite: false,
    pageSettings: {
      isSmallText: false,
      isFullWidth: true,
      selectedFont: PageFontFamilies.DEFAULT,
    },
    coverInfo: {
      isHasCover: true,
      cover: `${woodcutsCover}`,
      coverType: 'imgUrl',
    },
    iconInfo: {
      isHasIcon: true,
      icon: `${vue3Svg}`,
    },
    commentsInfo: {
      isHasComments: false,
      comments: [],
    },
  },
  lastPage: null,
  recentlyDeleted: [],
  recentPages: [], //!
}

export const workSpaceSlice = createSlice({
  name: 'workspace',

  initialState: initialState,

  reducers: {
    createNewPage(state, action: PayloadAction<IWorkspacePage>) {
      state.pages = [...state.pages, action.payload]
    },
    deletePage(state, action: PayloadAction<number>) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      if (state.recentlyDeleted.length === 20) state.recentlyDeleted.shift()
      state.recentlyDeleted = [...state.recentlyDeleted, page]
      state.pages = state.pages.filter(page => page.id !== action.payload)

      if (page.id === state.currentPage.id) {
        if (state.lastPage) state.currentPage = state.lastPage

        const randomPage = _.sample(state.pages)
        if (!randomPage) return

        state.currentPage = randomPage //* Переработать.
      }
    },
    deletePagePermanently(state, action: PayloadAction<number>) {
      state.recentlyDeleted = state.recentlyDeleted.filter(
        page => page.id !== action.payload
      )
    },
    duplicatePage(state, action: PayloadAction<number>) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      const pageDuplicate = JSON.parse(JSON.stringify(page))
      pageDuplicate.title = `${pageDuplicate.title} (1)`
      pageDuplicate.id = Math.random()

      state.pages = [...state.pages, pageDuplicate]
    },
    restorePage(state, action: PayloadAction<number>) {
      const id = action.payload
      const page = state.recentlyDeleted.find(page => page.id === id)
      if (!page) return

      state.recentlyDeleted = state.recentlyDeleted.filter(
        page => page.id !== id
      )

      page.id = Math.random()
      page.isFavorite = false
      state.pages = [...state.pages, page]
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      state.lastPage = state.currentPage
      state.currentPage = page
    },
    setPageTitle(state, action: PayloadAction<{ title: string; id: number }>) {
      const { id, title } = action.payload
      const page = state.pages.find(page => page.id === id)
      if (!page) return

      if (page.id === state.currentPage.id) {
        state.currentPage.title = title
      }

      page.title = title
    },
    setPageIcon(state, action: PayloadAction<{ icon: string; id: number }>) {
      const { id, icon } = action.payload
      const page = state.pages.find(page => page.id === id)
      if (!page) return

      page.iconInfo.isHasIcon = true
      page.iconInfo.icon = icon
      state.currentPage.iconInfo.isHasIcon = true
      state.currentPage.iconInfo.icon = icon
    },
    setPageCover(state, action: PayloadAction<{ cover: any; id: number }>) {
      const { id, cover } = action.payload //!
      const page = state.pages.find(page => page.id === id)
      if (!page) return

      page.coverInfo.isHasCover = true
      page.coverInfo.cover = cover
      state.currentPage.coverInfo.isHasCover = true
      state.currentPage.coverInfo.cover = cover
    },
    setPageFontFamily(state, action: PayloadAction<SetPageFontPayloadAction>) {
      const { id, fontFamily } = action.payload
      const page = state.pages.find(page => page.id === id)
      if (!page) return

      page.pageSettings.selectedFont = fontFamily
      state.currentPage.pageSettings.selectedFont = fontFamily
    },
    removeIcon(state, action: PayloadAction<number>) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      page.iconInfo.isHasIcon = false
      page.iconInfo.icon = '' //!
      state.currentPage.iconInfo.isHasIcon = false
      state.currentPage.iconInfo.icon = ''
    },
    removeCover(state, action: PayloadAction<number>) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      page.coverInfo.isHasCover = false
      page.coverInfo.cover = ''
      state.currentPage.coverInfo.cover = ''
      state.currentPage.coverInfo.isHasCover = false
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
    toggleFavorite(state, action: PayloadAction<number>) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      state.currentPage.isFavorite = !state.currentPage.isFavorite
      page.isFavorite = !page.isFavorite
    },
    toggleFullWidth(state, action: PayloadAction<number>) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      state.currentPage.pageSettings.isFullWidth =
        !state.currentPage.pageSettings.isFullWidth
      page.pageSettings.isFullWidth = !page.pageSettings.isFullWidth
    },
    toggleSmallText(state, action: PayloadAction<number>) {
      const page = state.pages.find(page => page.id === action.payload)
      if (!page) return

      state.currentPage.pageSettings.isSmallText =
        !state.currentPage.pageSettings.isSmallText
      page.pageSettings.isSmallText = !page.pageSettings.isSmallText
    },
  },
})

export const {
  createNewPage,
  deletePage,
  deletePagePermanently,
  restorePage,
  duplicatePage,
  setCurrentPage,
  setPageTitle,
  setPageCover,
  setPageIcon,
  setPageFontFamily,
  removeCover,
  removeIcon,
  toggleFavorite,
  toggleFullWidth,
  toggleSmallText,
  addToFavorite,
  removeFavorite,
} = workSpaceSlice.actions

export default workSpaceSlice.reducer
