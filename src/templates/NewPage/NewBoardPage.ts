import NewPage from './NewPage'
import { DefaultBoardPageParams } from './types'
import { PageTemplates } from 'redux/popupsSlice/types'

export default class NewBoardPage
  extends NewPage
  implements DefaultBoardPageParams
{
  template: PageTemplates.BOARD
  pageSettings: {
    isFullWidth: boolean
    isSmallText: boolean
    selectedFontFamily: string
  }
  constructor(params: DefaultBoardPageParams) {
    super(params)
    this.template = PageTemplates.BOARD
    this.pageSettings = params.pageSettings
  }
}
