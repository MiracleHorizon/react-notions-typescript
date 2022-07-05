import { EmptyPageOption, IPageFont } from './types'
import { PageTemplates } from 'redux/popupsSlice/types'
import {
  TemplatesSvg,
  CalendarTemplateSvg,
  BoardTemplateSvg,
  TableTemplateSvg,
  EmptyPageIconSvg,
  EmptyWithIconSvg,
  TaskListTemplateSvg,
} from 'shared/SVG'

const EMPTY_PAGE_DECORATION_OPTIONS: EmptyPageOption[] = [
  {
    title: 'Empty with icon',
    IconSVG: EmptyPageIconSvg,
    action: () => {
      console.log('Empty with icon')
    },
  },
  {
    title: 'Empty',
    IconSVG: EmptyWithIconSvg,
    action: () => {
      console.log('Empty ')
    },
  },
  {
    title: 'Ready-made templates',
    IconSVG: TemplatesSvg,
    action: () => {
      console.log('Ready-made templates')
    },
  },
]
const EMPTY_PAGE_TEMPLATES_OPTIONS: EmptyPageOption[] = [
  {
    title: PageTemplates.BOARD,
    IconSVG: BoardTemplateSvg,
    action: () => {
      console.log('Board')
    },
  },
  {
    title: PageTemplates.TASK_LIST,
    IconSVG: TaskListTemplateSvg,
    action: () => {
      console.log('Task List')
    },
  },
  {
    title: PageTemplates.CALENDAR,
    IconSVG: CalendarTemplateSvg,
    action: () => {
      console.log('Calendar')
    },
  },
  {
    title: PageTemplates.TABLE,
    IconSVG: TableTemplateSvg,
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

const PAGE_FONTS: IPageFont[] = [
  { title: 'Default', tooltipTitle: 'The default sans-serif workhorse' },
  { title: 'Serif', tooltipTitle: 'Good for publishing' },
  { title: 'Mono', tooltipTitle: 'Good for drafting and notes' },
]

export {
  PAGE_FONTS,
  EMPTY_PAGE_DECORATION_OPTIONS,
  EMPTY_PAGE_TEMPLATES_OPTIONS,
  EMPTY_PAGE_OPTION_TITLES,
  EMPTY_PAGE_OPTIONS_LIST,
}
