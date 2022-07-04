import { IElementCoords } from '../../@types/generalTypes'

enum PageOptionsEnum {
  FAVORITES = 'Favorites',
  COMMON = 'Common',
}

interface PageOptionsModal {
  isOpen: boolean
  options: PageOptionsEnum | []
  coords: IElementCoords
  pageId: number
}

interface IAppModalsState {
  isChangePageTitleModalOpen: boolean
  isQuickSearchModalOpen: boolean
  isMovePageToModalOpen: boolean
  pageOptionsModal: PageOptionsModal
}

export type { IAppModalsState, PageOptionsModal }
export { PageOptionsEnum }
