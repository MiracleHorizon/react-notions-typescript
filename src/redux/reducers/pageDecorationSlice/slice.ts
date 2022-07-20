import { createSlice } from '@reduxjs/toolkit'
import {
  ChangeCoverCategories,
  ChangeDecorState,
  ChangeIconCategories,
} from './types'
import { LoadingStatuses } from 'api/types'
import { fetchCovers, fetchEmoji } from 'api/reduxAsyncThunks'

import solidBeigeCover from 'assets/img/pageCovers/solid_colors_and_gradients/solid_beige.png'
import solidRedCover from 'assets/img/pageCovers/solid_colors_and_gradients/solid_red.png'
import solidYellowCover from 'assets/img/pageCovers/solid_colors_and_gradients/solid_yellow.png'
import solidBlueCover from 'assets/img/pageCovers/solid_colors_and_gradients/solid_blue.png'
import gradientCover1 from 'assets/img/pageCovers/solid_colors_and_gradients/gradient_1.png'
import gradientCover2 from 'assets/img/pageCovers/solid_colors_and_gradients/gradient_2.png'
import gradientCover3 from 'assets/img/pageCovers/solid_colors_and_gradients/gradient_3.png'
import gradientCover4 from 'assets/img/pageCovers/solid_colors_and_gradients/gradient_4.png'
import gradientCover5 from 'assets/img/pageCovers/solid_colors_and_gradients/gradient_5.png'
import gradientCover6 from 'assets/img/pageCovers/solid_colors_and_gradients/gradient_6.png'
import gradientCover7 from 'assets/img/pageCovers/solid_colors_and_gradients/gradient_7.png'

import nasaArchiveCover1 from 'assets/img/pageCovers/nasa_archive/nasa_carina_nebula.jpg'
import nasaArchiveCover2 from 'assets/img/pageCovers/nasa_archive/nasa_earth_grid.jpg'
import nasaArchiveCover3 from 'assets/img/pageCovers/nasa_archive/nasa_fingerprints_of_water_on_the_sand.jpg'
import nasaArchiveCover4 from 'assets/img/pageCovers/nasa_archive/nasa_orion_nebula.jpg'
import nasaArchiveCover5 from 'assets/img/pageCovers/nasa_archive/nasa_great_sandy_desert_australia.jpg'
import nasaArchiveCover6 from 'assets/img/pageCovers/nasa_archive/nasa_reduced_gravity_walking_simulator.jpg'
import nasaArchiveCover7 from 'assets/img/pageCovers/nasa_archive/nasa_the_blue_marble.jpg'
import nasaArchiveCover8 from 'assets/img/pageCovers/nasa_archive/nasa_wrights_first_flight.jpg'
import nasaArchiveCover9 from 'assets/img/pageCovers/nasa_archive/nasa_robert_stewart_spacewalk.jpg'

import metJapaneseCover1 from 'assets/img/pageCovers/met_museum_japanese/woodcuts_1.jpg'
import metJapaneseCover2 from 'assets/img/pageCovers/met_museum_japanese/woodcuts_2.jpg'
import metJapaneseCover3 from 'assets/img/pageCovers/met_museum_japanese/woodcuts_3.jpg'
import metJapaneseCover4 from 'assets/img/pageCovers/met_museum_japanese/woodcuts_4.jpg'
import metJapaneseCover5 from 'assets/img/pageCovers/met_museum_japanese/woodcuts_5.jpg'
import metJapaneseCover6 from 'assets/img/pageCovers/met_museum_japanese/woodcuts_6.jpg'
import metJapaneseCover7 from 'assets/img/pageCovers/met_museum_japanese/woodcuts_7.jpg'
import metJapaneseCover8 from 'assets/img/pageCovers/met_museum_japanese/woodcuts_8.jpg'

import metPattern1 from 'assets/img/pageCovers/met_museum_patterns/met_pattern_1.jpg'
import metPattern2 from 'assets/img/pageCovers/met_museum_patterns/met_pattern_2.jpg'
import metPattern3 from 'assets/img/pageCovers/met_museum_patterns/met_pattern_3.jpg'
import metPattern4 from 'assets/img/pageCovers/met_museum_patterns/met_pattern_4.jpg'

const initialState: ChangeDecorState = {
  isCoverModalOpen: false,
  isIconModalOpen: false,
  coverCategories: [
    ChangeCoverCategories.GALLERY,
    ChangeCoverCategories.UPLOAD,
    ChangeCoverCategories.LINK,
  ],
  iconCategories: [
    ChangeIconCategories.EMOJI,
    ChangeIconCategories.UPLOAD,
    ChangeIconCategories.LINK,
  ],
  coversLists: [
    {
      title: 'Color & Gradient',
      content: [
        { coverImg: `${solidRedCover}` },
        { coverImg: `${solidYellowCover}` },
        { coverImg: `${solidBlueCover}` },
        { coverImg: `${solidBeigeCover}` },
        { coverImg: `${gradientCover1}` },
        { coverImg: `${gradientCover2}` },
        { coverImg: `${gradientCover3}` },
        { coverImg: `${gradientCover4}` },
        { coverImg: `${gradientCover5}` },
        { coverImg: `${gradientCover6}` },
        { coverImg: `${gradientCover7}` },
      ],
    },
    {
      title: 'NASA Archive',
      content: [
        { coverImg: `${nasaArchiveCover1}` },
        { coverImg: `${nasaArchiveCover2}` },
        { coverImg: `${nasaArchiveCover3}` },
        { coverImg: `${nasaArchiveCover4}` },
        { coverImg: `${nasaArchiveCover5}` },
        { coverImg: `${nasaArchiveCover6}` },
        { coverImg: `${nasaArchiveCover7}` },
        { coverImg: `${nasaArchiveCover8}` },
        { coverImg: `${nasaArchiveCover9}` },
      ],
    },
    {
      title: 'The Met Museum - Patterns',
      content: [
        { coverImg: `${metPattern1}` },
        { coverImg: `${metPattern2}` },
        { coverImg: `${metPattern3}` },
        { coverImg: `${metPattern4}` },
      ],
    },
    {
      title: 'The Met Museum - Japanese Prints',
      content: [
        { coverImg: `${metJapaneseCover1}` },
        { coverImg: `${metJapaneseCover2}` },
        { coverImg: `${metJapaneseCover3}` },
        { coverImg: `${metJapaneseCover4}` },
        { coverImg: `${metJapaneseCover5}` },
        { coverImg: `${metJapaneseCover6}` },
        { coverImg: `${metJapaneseCover7}` },
        { coverImg: `${metJapaneseCover8}` },
      ],
    },
  ],
  iconsLists: [],
  selectedCoverCategory: ChangeCoverCategories.GALLERY,
  selectedIconCategory: ChangeIconCategories.EMOJI,
  coversLoadingStatus: LoadingStatuses.IDLE,
  emojiLoadingStatus: LoadingStatuses.IDLE,
}

export const pageDecorationSlice = createSlice({
  name: 'pageDecoration',

  initialState: initialState,

  reducers: {
    setCoverCategory(state, action) {
      state.selectedCoverCategory = action.payload
    },
    setIconCategory(state, action) {
      state.selectedIconCategory = action.payload
    },
    refreshCoverCategory(state) {
      state.selectedCoverCategory = ChangeCoverCategories.GALLERY
    },
    refreshIconCategory(state) {
      state.selectedIconCategory = ChangeIconCategories.EMOJI
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchCovers.pending, state => {
      state.coversLoadingStatus = LoadingStatuses.PENDING
    })
    builder.addCase(fetchCovers.fulfilled, (state, action) => {
      state.coversLoadingStatus = LoadingStatuses.SUCCEEDED
    })
    builder.addCase(fetchCovers.rejected, (state, action) => {
      state.coversLoadingStatus = LoadingStatuses.REJECTED
    })

    builder.addCase(fetchEmoji.pending, state => {
      state.emojiLoadingStatus = LoadingStatuses.PENDING
    })
    builder.addCase(fetchEmoji.fulfilled, (state, action) => {
      state.emojiLoadingStatus = LoadingStatuses.SUCCEEDED
    })
    builder.addCase(fetchEmoji.rejected, (state, action) => {
      state.emojiLoadingStatus = LoadingStatuses.REJECTED
    })
  },
})

export const {
  setCoverCategory,
  setIconCategory,
  refreshCoverCategory,
  refreshIconCategory,
} = pageDecorationSlice.actions

export default pageDecorationSlice.reducer
