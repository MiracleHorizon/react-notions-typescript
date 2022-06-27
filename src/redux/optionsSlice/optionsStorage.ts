import { IOptionItem, IPageFont, IPageSettingsOptions } from './types'
import searchSvg from '../../assets/img/search.svg'
import updatesSvg from '../../assets/img/updates.svg'
import settingsSvg from '../../assets/img/settings.svg'
import trashSvg from '../../assets/img/optionsImgs/trash.svg'
import addFavorite from '../../assets/img/star-favorite.svg'
import removeFavorite from '../../assets/img/star-notFavorite.svg' //!
import copyLinkSvg from '../../assets/img/optionsImgs/copyLink.svg'
import duplicateSvg from '../../assets/img/optionsImgs/copy.svg'
import renameSvg from '../../assets/img/optionsImgs/rename.svg'
import pageHistorySvg from '../../assets/img/optionsImgs/pageHistory.svg'
import lockPageSvg from '../../assets/img/optionsImgs/lockPage.svg'
import unlockPageSvg from '../../assets/img/optionsImgs/unlockPage.svg'
import customizePage from '../../assets/img/optionsImgs/customizePage.svg'
import { useSelector } from 'react-redux'
import { currentPageSelector } from '../workSpaceSlice/selectors'

const isPageLock = false //!

const USER_BAR_OPTIONS: IOptionItem[] = [
  { title: 'Quick Find', imgUrl: `${searchSvg}` },
  { title: 'All Updates', imgUrl: `${updatesSvg}` },
  { title: 'Settings & Members', imgUrl: `${settingsSvg}` },
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
  USER_BAR_OPTIONS,
  FAVORITE_PAGE_OPTIONS,
  PRIVATE_PAGE_OPTIONS,
  BOARD_PAGE_OPTIONS,
  TASK_LIST_PAGE_OPTIONS,
  PAGE_FONTS,
}
