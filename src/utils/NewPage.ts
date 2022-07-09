import {
  CoverColors,
  IComment,
  IWorkspacePage,
  PageFontFamilies,
} from 'redux/workSpaceSlice/types'
import { PageTemplates } from 'redux/popupsSlice/types'

class NewPage implements IWorkspacePage {
  template: PageTemplates.BOARD
  id: number
  title: string
  isFavorite: boolean
  pageSettings: {
    isSmallText: boolean
    isFullWidth: boolean
    selectedFont: PageFontFamilies
  }
  coverInfo: {
    isHasCover: boolean
    cover: CoverColors | string
    coverType: 'imgUrl' | 'CoverColors' | ''
  }
  iconInfo: {
    isHasIcon: boolean
    icon: string
  }
  commentsInfo: {
    isHasComments: boolean
    comments: IComment[] | []
  }

  constructor(params: IWorkspacePage) {
    this.id = params.id
    this.title = params.title
    this.pageSettings = params.pageSettings
    this.isFavorite = params.isFavorite
    this.coverInfo = params.coverInfo
    this.iconInfo = params.iconInfo
    this.commentsInfo = params.commentsInfo
    this.template = PageTemplates.BOARD
  }
}

const DEFAULT_PAGE_SETTINGS: IWorkspacePage = {
  template: PageTemplates.BOARD,
  id: Math.random(),
  title: 'Untitled',
  isFavorite: false,
  pageSettings: {
    isSmallText: false,
    isFullWidth: false,
    selectedFont: PageFontFamilies.DEFAULT,
  },
  coverInfo: {
    isHasCover: false,
    cover: '',
    coverType: '',
  },
  iconInfo: {
    isHasIcon: false,
    icon: '',
  },
  commentsInfo: {
    isHasComments: false,
    comments: [],
  },
}

const newPageConstructor = (): IWorkspacePage => {
  return JSON.parse(JSON.stringify(new NewPage(DEFAULT_PAGE_SETTINGS)))
}

export { newPageConstructor }
