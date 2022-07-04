import { createSlice } from '@reduxjs/toolkit'
import { IPagesSliceState } from './types'

import { FAVORITE_PAGE_OPTIONS, COMMON_PAGE_OPTIONS } from './optionsStorage'

const initialState: IPagesSliceState = {
  favoritePageOptions: FAVORITE_PAGE_OPTIONS,
  commonPageOptions: COMMON_PAGE_OPTIONS,
}

export const optionsSlice = createSlice({
  name: 'options',

  initialState: initialState,

  reducers: {},
})

export default optionsSlice.reducer
