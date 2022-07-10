import { createSlice } from '@reduxjs/toolkit'
import {
  ChangeCoverCategories,
  ChangeDecorState,
  ChangeIconCategories,
} from './types'
import { CoverColors } from '../workSpaceSlice/types'

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
    // { title: 'Color & Gradient', covers: Object.values(CoverColors) },
    {
      title: 'NASA Archive',
      content: [
        {
          coverImg: `${nasaArchiveCover1}`,
        },
        {
          coverImg: `${nasaArchiveCover2}`,
        },
        {
          coverImg: `${nasaArchiveCover3}`,
        },
        {
          coverImg: `${nasaArchiveCover4}`,
        },
        {
          coverImg: `${nasaArchiveCover5}`,
        },
        {
          coverImg: `${nasaArchiveCover6}`,
        },
        {
          coverImg: `${nasaArchiveCover7}`,
        },
        {
          coverImg: `${nasaArchiveCover8}`,
        },
        { coverImg: `${nasaArchiveCover9}` },
      ],
    },
    {
      title: 'The Met Museum - Patterns',
      content: [
        {
          coverImg: `${metPattern1}`,
        },
        {
          coverImg: `${metPattern2}`,
        },
        {
          coverImg: `${metPattern3}`,
        },
        {
          coverImg: `${metPattern4}`,
        },
      ],
    },
    {
      title: 'The Met Museum - Japanese Prints',
      content: [
        {
          coverImg: `${metJapaneseCover1}`,
        },
        {
          coverImg: `${metJapaneseCover2}`,
        },
        {
          coverImg: `${metJapaneseCover3}`,
        },
        {
          coverImg: `${metJapaneseCover4}`,
        },
        {
          coverImg: `${metJapaneseCover5}`,
        },
        {
          coverImg: `${metJapaneseCover6}`,
        },
        {
          coverImg: `${metJapaneseCover7}`,
        },
        {
          coverImg: `${metJapaneseCover8}`,
        },
      ],
    },
  ],
  iconsLists: [],
  selectedCoverCategory: ChangeCoverCategories.GALLERY,
  selectedIconCategory: ChangeIconCategories.EMOJI,
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
})

export const {
  setCoverCategory,
  setIconCategory,
  refreshCoverCategory,
  refreshIconCategory,
} = pageDecorationSlice.actions

export default pageDecorationSlice.reducer
