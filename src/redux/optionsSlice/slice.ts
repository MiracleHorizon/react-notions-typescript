import { createSlice } from '@reduxjs/toolkit'
import { IPagesSliceState } from './types'

import {
  FAVORITE_PAGE_OPTIONS,
  PRIVATE_PAGE_OPTIONS,
  USER_BAR_OPTIONS,
} from './optionsStorage'

const initialState: IPagesSliceState = {
  userBarOptions: USER_BAR_OPTIONS,
  favoritePageOptions: FAVORITE_PAGE_OPTIONS,
  privatePagesOptions: PRIVATE_PAGE_OPTIONS,
}

export const optionsSlice = createSlice({
  name: 'options',

  initialState: initialState,

  reducers: {},
})

export default optionsSlice.reducer
