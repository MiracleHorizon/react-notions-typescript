import { CoverColors, IWorkspacePage } from '../redux/workSpaceSlice/types'
import { PageTemplates } from '../redux/popupsSlice/types'

class NewPage implements IWorkspacePage {
  id: number | null
  title: string
  cover: null | CoverColors
  icon: null | string
  isHasCover: boolean
  isHasIcon: boolean
  isFullWidth: boolean
  isSmallText: boolean
  isHasComments: boolean
  isFavorite: boolean
  template: PageTemplates

  constructor(params: IWorkspacePage) {
    this.id = params.id
    this.title = params.title
    this.cover = params.cover
    this.icon = params.icon
    this.isHasCover = params.isHasCover
    this.isHasIcon = params.isHasIcon
    this.isFullWidth = params.isFullWidth
    this.isSmallText = params.isSmallText
    this.isHasComments = params.isHasComments
    this.isFavorite = params.isFavorite
    this.template = PageTemplates.BOARD
  }
}

const DEFAULT_PAGE_SETTINGS: IWorkspacePage = {
  id: null,
  title: 'Untitled',
  cover: null,
  icon: null,
  isHasCover: false,
  isHasIcon: false,
  isFullWidth: false,
  isSmallText: false,
  isHasComments: false,
  isFavorite: false,
}

const newPageConstructor = (): IWorkspacePage => {
  return JSON.parse(JSON.stringify(new NewPage(DEFAULT_PAGE_SETTINGS)))
}

export { newPageConstructor }
