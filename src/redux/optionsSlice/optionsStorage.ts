import {
  EmptyPageOption,
  IOptionItem,
  IPageFont,
  IPageSettingsOptions,
} from './types'
import { PageTemplates } from '../popupsSlice/types'
import searchSvg from 'assets/img/inputs/search.svg'
import updatesSvg from 'assets/img/optionsImgs/updates.svg'
import settingsSvg from 'assets/img/optionsImgs/settings.svg'
import trashSvg from 'assets/img/optionsImgs/trash.svg'
import addFavorite from 'assets/img/optionsImgs/star-favorite.svg'
import removeFavorite from 'assets/img/optionsImgs/star-notFavorite.svg' //!
import copyLinkSvg from 'assets/img/optionsImgs/copyLink.svg'
import duplicateSvg from 'assets/img/optionsImgs/copy.svg'
import renameSvg from 'assets/img/optionsImgs/rename.svg'
import pageHistorySvg from 'assets/img/optionsImgs/pageHistory.svg'
import lockPageSvg from 'assets/img/optionsImgs/lockPage.svg'
import unlockPageSvg from 'assets/img/optionsImgs/unlockPage.svg'
import customizePage from 'assets/img/optionsImgs/customizePage.svg'
import tableSvg from 'assets/img/optionsImgs/table.svg'
import boardSvg from 'assets/img/optionsImgs/board.svg'
import emptySvg from 'assets/img/optionsImgs/empty.svg'
import emptyIconSvg from 'assets/img/optionsImgs/emptyIcon.svg'
import emptyCoverSvg from 'assets/img/optionsImgs/emptyCover.svg'
import calendarSvg from 'assets/img/optionsImgs/calendar.svg'
import taskListSvg from 'assets/img/optionsImgs/taskList.svg'
import templatesSvg from 'assets/img/optionsImgs/templates.svg'

const isPageLock = false //!

const EMPTY_PAGE_DECORATION_OPTIONS: EmptyPageOption[] = [
  {
    title: 'Empty with icon',
    img: emptyIconSvg,
    onClick: () => {
      console.log('Empty with icon')
    },
  },
  {
    title: 'Empty with cover',
    img: emptyCoverSvg,
    onClick: () => {
      console.log('Empty with cover')
    },
  },
  {
    title: 'Empty',
    img: emptySvg,
    onClick: () => {
      console.log('Empty ')
    },
  },
  {
    title: 'Ready-made templates',
    img: templatesSvg,
    onClick: () => {
      console.log('Ready-made templates')
    },
  },
]

const EMPTY_PAGE_TEMPLATES_OPTIONS: EmptyPageOption[] = [
  {
    title: PageTemplates.BOARD,
    img: boardSvg,
    onClick: () => {
      console.log('Board')
    },
  },
  {
    title: PageTemplates.TASK_LIST,
    img: taskListSvg,
    onClick: () => {
      console.log('Task List')
    },
  },
  {
    title: PageTemplates.CALENDAR,
    img: calendarSvg,
    onClick: () => {
      console.log('Calendar')
    },
  },
  {
    title: PageTemplates.TABLE,
    img: tableSvg,
    onClick: () => {
      console.log('Table')
    },
  },
]

const FAVORITE_PAGE_OPTIONS: IOptionItem[] = [
  { title: 'Remove from Favorites', imgUrl: `${removeFavorite}` },
  { title: 'Copy link', imgUrl: `${copyLinkSvg}` },
  { title: 'Rename', imgUrl: `${renameSvg}` },
]
const PRIVATE_PAGE_OPTIONS: IOptionItem[] = [
  { title: 'Delete', imgUrl: `${trashSvg}` },
  { title: 'Add to Favorites', imgUrl: `${addFavorite}` },
  { title: 'Duplicate', imgUrl: `${duplicateSvg}` },
  { title: 'Copy link', imgUrl: `${copyLinkSvg}` },
  { title: 'Rename', imgUrl: `${renameSvg}` },
]

const PAGE_FONTS: IPageFont[] = [
  { title: 'Default', tooltipTitle: 'The default sans-serif workhorse' },
  { title: 'Serif', tooltipTitle: 'Good for publishing' },
  { title: 'Mono', tooltipTitle: 'Good for drafting and notes' },
]

const PAGE_CUSTOMIZE_OPTIONS: IOptionItem[] = [
  {
    title: 'Customize page',
    imgUrl: `${customizePage}`,
  },
  { title: 'Lock page', imgUrl: `${isPageLock ? lockPageSvg : unlockPageSvg}` },
]
const PAGE_CHANGES_OPTIONS: IOptionItem[] = [
  { title: 'Page history', imgUrl: `${pageHistorySvg}` },
  { title: 'Delete', imgUrl: `${trashSvg}` },
]
const PAGE_SHARE_OPTIONS: IOptionItem[] = [
  { title: 'Add to Favorites', imgUrl: `${addFavorite}` },
  { title: 'Copy link', imgUrl: `${copyLinkSvg}` },
]

const BOARD_PAGE_OPTIONS: IPageSettingsOptions = {
  pageCustomizeOptions: PAGE_CUSTOMIZE_OPTIONS,
  pageShareOptions: PAGE_SHARE_OPTIONS,
  pageChangesOptions: PAGE_CHANGES_OPTIONS,
}
const TASK_LIST_PAGE_OPTIONS: IPageSettingsOptions = {
  pageShareOptions: PAGE_SHARE_OPTIONS,
  pageChangesOptions: PAGE_CHANGES_OPTIONS,
}
// const TABLE_PAGE_OPTIONS: IPageSettingsOptions = []

export {
  FAVORITE_PAGE_OPTIONS,
  PRIVATE_PAGE_OPTIONS,
  BOARD_PAGE_OPTIONS,
  TASK_LIST_PAGE_OPTIONS,
  PAGE_FONTS,
  EMPTY_PAGE_DECORATION_OPTIONS,
  EMPTY_PAGE_TEMPLATES_OPTIONS,
}
