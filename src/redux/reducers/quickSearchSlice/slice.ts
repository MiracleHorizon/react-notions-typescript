import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { RecentSearchState } from './types'
import { IWorkspacePage } from '../workSpaceSlice/types'
import { LoadingStatuses } from 'api/types'
import {
  MOCK_API_NOTIONS_REFERENCE,
  MOCK_API_RECENT_PAGES_REFERENCE,
} from 'api/constants'

const addPageToRecentVisited = createAsyncThunk(
  'quickSearch/addToRecentVisited',
  async (id: string) => {
    try {
      const page = await axios.get(`${MOCK_API_NOTIONS_REFERENCE}/${id}`)
      await axios.post(MOCK_API_RECENT_PAGES_REFERENCE, page.data)
    } catch (e) {
      console.error(e)
    }
  }
)

const getRecentVisitedPages = createAsyncThunk(
  'quickSearch/getRecentVisitedPages',
  async () => {
    console.log(123)
    const response = await axios.get(MOCK_API_RECENT_PAGES_REFERENCE)

    return response.data as IWorkspacePage[]
  }
)

const clearRecentVisitedPages = createAsyncThunk(
  'quickSearch/clearRecentVisitedPages',
  async () => {
    const response = await axios.put(MOCK_API_RECENT_PAGES_REFERENCE, [])

    return response.data
  }
)

const initialState: RecentSearchState = {
  recentPages: [],
  recentSearches: [],
  loadingStatus: LoadingStatuses.IDLE,
}

export const quickSearchSlice = createSlice({
  name: 'quickSearch',

  initialState: initialState,

  reducers: {
    addSearchesValue(state, action: PayloadAction<string>) {
      const searchValue = {
        title: action.payload,
        id: (Math.random() * 100).toString(),
      }
      const isAlreadyContains = state.recentSearches.find(recentSearch => {
        return recentSearch.title === searchValue.title
      })

      if (state.recentSearches.length >= 3) state.recentSearches.shift()
      if (isAlreadyContains) return

      state.recentSearches.push(searchValue)
    },
    clearRecentSearchesList(state) {
      state.recentPages = []
    },
  },

  extraReducers: builder => {
    builder.addCase(getRecentVisitedPages.pending, state => {
      state.loadingStatus = LoadingStatuses.PENDING
    })
    builder.addCase(getRecentVisitedPages.fulfilled, (state, action) => {
      // state.recentPages = action.payload
      state.loadingStatus = LoadingStatuses.SUCCEEDED
    })
    builder.addCase(getRecentVisitedPages.rejected, state => {
      state.recentPages = []
      state.loadingStatus = LoadingStatuses.REJECTED
      console.error('Recent visited notions fetching ERROR')
    })

    builder.addCase(clearRecentVisitedPages.pending, state => {
      state.loadingStatus = LoadingStatuses.PENDING
    })
    builder.addCase(clearRecentVisitedPages.fulfilled, state => {
      // state.recentPages = []
      state.loadingStatus = LoadingStatuses.SUCCEEDED
    })
    builder.addCase(clearRecentVisitedPages.rejected, (state, action) => {
      console.error(action.payload)
      state.loadingStatus = LoadingStatuses.REJECTED
    })
  },
})

export const { addSearchesValue, clearRecentSearchesList } =
  quickSearchSlice.actions

export {
  addPageToRecentVisited,
  getRecentVisitedPages,
  clearRecentVisitedPages,
}

export default quickSearchSlice.reducer
