import { EmptyPageOption, IOptionItem, IPageFont } from './types'
import { PageTemplates } from '../popupsSlice/types'

import EmptyPageIconSVG from 'shared/SVG/EmptyPage'
import EmptyWidthIconSVG from 'shared/SVG/EmptyWithIcon'
import TemplatesSVG from 'shared/SVG/Templates'
import BoardTemplateSVG from 'shared/SVG/BoardTemplate'
import TaskListTemplateSVG from 'shared/SVG/TaskListTemplate'
import TableTemplateSVG from 'shared/SVG/TableTemplate'
import CalendarTemplateSVG from 'shared/SVG/CalendarTemplate'

import trashSvg from 'assets/img/optionsImgs/trash.svg' //!
import addFavorite from 'assets/img/optionsImgs/star-favorite.svg'
import removeFavorite from 'assets/img/optionsImgs/star-notFavorite.svg'
import copyLinkSvg from 'assets/img/optionsImgs/copyLink.svg'
import duplicateSvg from 'assets/img/optionsImgs/copy.svg'
import renameSvg from 'assets/img/optionsImgs/rename.svg'

const EMPTY_PAGE_DECORATION_OPTIONS: EmptyPageOption[] = [
  {
    title: 'Empty with icon',
    IconSVG: EmptyPageIconSVG,
    action: () => {
      console.log('Empty with icon')
    },
  },
  {
    title: 'Empty',
    IconSVG: EmptyWidthIconSVG,
    action: () => {
      console.log('Empty ')
    },
  },
  {
    title: 'Ready-made templates',
    IconSVG: TemplatesSVG,
    action: () => {
      console.log('Ready-made templates')
    },
  },
]
const EMPTY_PAGE_TEMPLATES_OPTIONS: EmptyPageOption[] = [
  {
    title: PageTemplates.BOARD,
    IconSVG: BoardTemplateSVG,
    action: () => {
      console.log('Board')
    },
  },
  {
    title: PageTemplates.TASK_LIST,
    IconSVG: TaskListTemplateSVG,
    action: () => {
      console.log('Task List')
    },
  },
  {
    title: PageTemplates.CALENDAR,
    IconSVG: CalendarTemplateSVG,
    action: () => {
      console.log('Calendar')
    },
  },
  {
    title: PageTemplates.TABLE,
    IconSVG: TableTemplateSVG,
    action: () => {
      console.log('Table')
    },
  },
]

const EMPTY_PAGE_OPTION_TITLES: string[] = [
  ...EMPTY_PAGE_DECORATION_OPTIONS.map(option => option.title),
  ...EMPTY_PAGE_TEMPLATES_OPTIONS.map(option => option.title),
]
const EMPTY_PAGE_OPTIONS_LIST: EmptyPageOption[] = [
  ...EMPTY_PAGE_DECORATION_OPTIONS,
  ...EMPTY_PAGE_TEMPLATES_OPTIONS,
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

export {
  FAVORITE_PAGE_OPTIONS,
  PRIVATE_PAGE_OPTIONS,
  PAGE_FONTS,
  EMPTY_PAGE_DECORATION_OPTIONS,
  EMPTY_PAGE_TEMPLATES_OPTIONS,
  EMPTY_PAGE_OPTION_TITLES,
  EMPTY_PAGE_OPTIONS_LIST,
}
