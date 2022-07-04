import { IElementCoords } from '../../@types/types'

interface PageOptionsModal {
  isOpen: boolean
  coords: IElementCoords
}

interface IAppModalsState {
  isChangePageTitleModalOpen: boolean
  isQuickSearchModalOpen: boolean
  isMovePageToModalOpen: boolean
  pageOptionsModal: PageOptionsModal
}

export type { IAppModalsState, PageOptionsModal }
