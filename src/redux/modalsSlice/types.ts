import { ElementCoords } from '../../@types/generalTypes'

enum PageOptionsEnum {
  FAVORITES = 'Favorites',
  COMMON = 'Common',
}

interface PageOptionsPopup {
  isOpen: boolean
  options: PageOptionsEnum | []
  coords: ElementCoords
  pageId: number
}

interface MovePageToPopup {
  isOpen: boolean
  coords: ElementCoords
}

interface AppModalsState {
  isChangePageTitleModalOpen: boolean
  isQuickSearchModalOpen: boolean
  isPagesTrashModalOpen: boolean
  isChangePageIconPopupOpen: boolean
  movePageToPopup: MovePageToPopup
  pageOptionsPopup: PageOptionsPopup
}

export type { AppModalsState, PageOptionsPopup, MovePageToPopup }
export { PageOptionsEnum }
