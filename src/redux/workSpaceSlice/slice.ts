import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import axios from 'axios'

import { LoadingStatuses, PageFilterParams } from 'api/types'
import { MOCK_API_NOTIONS_REFERENCE } from 'api/constants'
import { PageTemplates } from 'redux/popupsSlice/types'
import {
  IWorkspacePage,
  PageFontFamilies,
  SetPageFontPayloadAction,
  WorkspaceSliceState,
} from './types'

import vue3Svg from 'assets/img/technologies/vue3.svg'
import woodcutsCover from 'assets/img/pageCovers/woodcuts_11.jpg'

const getAllNotionsPages = createAsyncThunk('notions/getAllPages', async () => {
  const { data } = await axios.get(`${MOCK_API_NOTIONS_REFERENCE}`)

  return data as IWorkspacePage[]
})

const getFilteredNotionsPages = createAsyncThunk(
  'notions/getFilteredPages',
  async (filterParams: PageFilterParams) => {
    const { id, title } = filterParams

    try {
      const response = await axios.get(
        `${MOCK_API_NOTIONS_REFERENCE}?filter=${title}`
      )

      return response.data
    } catch (e) {
      console.log('Ошибка запроса отфильтрованных страниц', e)
    }
  }
)

const getPageById = createAsyncThunk(
  'notions/getPageById',
  async (id: number) => {
    try {
      const response = await axios.get(`${MOCK_API_NOTIONS_REFERENCE}/:${id}`)

      return response.data
    } catch (e) {
      console.log('Не удалось получить страницу по айди', e)
    }
  }
)

const createNewNotionPage = createAsyncThunk(
  'notions/createNewPage',
  async (newPageData: IWorkspacePage) => {
    try {
      return await axios.post(
        `${MOCK_API_NOTIONS_REFERENCE}`,
        JSON.stringify(newPageData)
      )
    } catch (e) {
      console.log('Ошибка создания новой страницы', e)
    }
  }
)

const setCurrentNotionPage = createAsyncThunk(
  'notions/setCurrentPage',
  async (id: number) => {
    try {
      postToRecentPages(id)
      setLastPage(id)

      const response = await axios.get(`${MOCK_API_NOTIONS_REFERENCE}/${id}`)

      return response.data
    } catch (e) {
      console.log('Ошибка установки текущий страницы', e)
    }
  }
)

const movePageTo = createAsyncThunk('', async () => {})

const deleteNotionPage = createAsyncThunk(
  'notions/deletePage',
  async (id: number) => {
    try {
      const response = await axios.delete(
        `${MOCK_API_NOTIONS_REFERENCE}/:${id}`
      )

      return response.status
    } catch (e) {
      console.log('Удалить страницу не удалось', e)
    }
  }
)

const removePageFromFavorites = createAsyncThunk(
  'notions/removeFromFavorite',
  async (id: number) => {
    try {
      const page = getPageById(id)
      // page.isFavorite = false

      const response = await axios.put(
        `${MOCK_API_NOTIONS_REFERENCE}/:${id}`,
        JSON.stringify(page)
      )

      return response.data
    } catch (e) {
      console.log('Не удалось убрать из избранного', e)
    }
  }
)

interface IconState {
  id: string
  icon: string
}

const setLastPage = createAsyncThunk('', async (id: number) => {})
const postToRecentPages = createAsyncThunk('', async (id: number) => {})
const postNewPageIcon = createAsyncThunk('', async () => {})
const postNewIconByLink = createAsyncThunk(
  'notions/postNewLinkIcon',
  async ({ id, icon }: IconState) => {
    const { data: newPageData } = await axios.get(
      `${MOCK_API_NOTIONS_REFERENCE}/${id}`
    )
    newPageData.iconInfo.icon = icon

    const { data } = await axios.put(
      `${MOCK_API_NOTIONS_REFERENCE}/${id}`,
      newPageData
    )

    return data
  }
)

const postNewPageCover = createAsyncThunk('', async () => {})
const postNewPageTitle = createAsyncThunk('', async () => {})

const initialState: WorkspaceSliceState = {
  pages: [],
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
    dependentPages: {
      isHasDependentPages: false,
      pages: [],
    },
    history: {
      userName: '',
      title: '',
      icon: '',
      updated: '',
      deleted: '',
    },
  },
  lastPage: null,
  recentlyDeleted: [],
  recentPages: [],
  loadingStatus: LoadingStatuses.IDLE,
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

  extraReducers: builder => {
    builder.addCase(getAllNotionsPages.pending, state => {
      // setTimeout(() => (state.loadingStatus = LoadingStatuses.PENDING), 2000)
    })
    builder.addCase(getAllNotionsPages.fulfilled, (state, action) => {
      state.pages = action.payload
      state.loadingStatus = LoadingStatuses.SUCCEEDED
    })
    builder.addCase(getAllNotionsPages.rejected, state => {
      state.pages = []
      state.loadingStatus = LoadingStatuses.REJECTED
    })

    builder.addCase(setCurrentNotionPage.pending, state => {
      setTimeout(() => (state.loadingStatus = LoadingStatuses.PENDING), 2000)
    })
    builder.addCase(
      setCurrentNotionPage.fulfilled,
      (state, action: PayloadAction<IWorkspacePage>) => {
        state.currentPage = action.payload
      }
    )
    builder.addCase(setCurrentNotionPage.rejected, state => {
      state.currentPage = state.lastPage ? state.lastPage : state.pages[0]
    })

    builder.addCase(postNewIconByLink.pending, state => {})
    builder.addCase(postNewIconByLink.fulfilled, (state, action) => {
      console.log(action.payload)
    })
    builder.addCase(postNewIconByLink.rejected, state => {})
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

export {
  getAllNotionsPages,
  getFilteredNotionsPages,
  getPageById,
  createNewNotionPage,
  deleteNotionPage,
  setCurrentNotionPage,
  removePageFromFavorites,
  movePageTo,
  postNewPageTitle,
  postNewPageIcon,
  postNewIconByLink,
  postNewPageCover,
}

export default workSpaceSlice.reducer
