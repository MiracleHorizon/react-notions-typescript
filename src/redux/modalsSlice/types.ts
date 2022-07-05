import { ElementCoords } from '../../@types/generalTypes'

enum PageOptionsEnum {
  FAVORITES = 'Favorites',
  COMMON = 'Common',
}

interface PageOptionsModal {
  isOpen: boolean
  options: PageOptionsEnum | []
  coords: ElementCoords
  pageId: number
}

interface IAppModalsState {
  isChangePageTitleModalOpen: boolean
  isQuickSearchModalOpen: boolean
  isMovePageToModalOpen: boolean
  isPagesTrashModalOpen: boolean
  pageOptionsModal: PageOptionsModal
}

export type { IAppModalsState, PageOptionsModal }
export { PageOptionsEnum }
