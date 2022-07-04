import { IElementCoords } from '../../@types/types'
import { IOptionItem } from '../optionsSlice/types'

interface PageOptionsModal {
  isOpen: boolean
  options: IOptionItem[]
  coords: IElementCoords
}

interface IAppModalsState {
  isChangePageTitleModalOpen: boolean
  isQuickSearchModalOpen: boolean
  isMovePageToModalOpen: boolean
  pageOptionsModal: PageOptionsModal
}

export type { IAppModalsState, PageOptionsModal }
