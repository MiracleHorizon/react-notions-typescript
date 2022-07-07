import { ElementCoords } from '../../@types/generalTypes'

enum PageTemplates {
  BOARD = 'Board',
  TASK_LIST = 'Task list',
}

enum PageOptionsEnum {
  FAVORITES = 'Favorites',
  COMMON = 'Common',
}

interface RenamableEssence {
  id: number
  title: string
  iconInfo: {
    icon: string
    isHasIcon: boolean
  }
}

interface PopupInitialState {
  isOpen: boolean
}

interface PageOptionsPopupState extends PopupInitialState {
  options: PageOptionsEnum | []
  coords: ElementCoords
  pageId: number
}

interface MovePageToPopupState extends PopupInitialState {
  coords: ElementCoords
}

interface RenamePopupState extends PopupInitialState {
  coords: ElementCoords
  essence: RenamableEssence
}

interface PageSettingsPopupState extends PopupInitialState {
  pageTemplate: PageTemplates // | null
}

interface PageIconPopup extends PopupInitialState {
  coords: ElementCoords
}

interface PopupsState {
  isQuickSearchModalOpen: boolean
  isPagesTrashModalOpen: boolean
  pageIconPopup: PageIconPopup
  renamePopup: RenamePopupState
  movePageToPopup: MovePageToPopupState
  pageOptionsPopup: PageOptionsPopupState
  pageSettingsPopup: PageSettingsPopupState
}

export type {
  PopupsState,
  PageOptionsPopupState,
  PageSettingsPopupState,
  PageIconPopup,
  MovePageToPopupState,
  RenamableEssence,
  RenamePopupState,
}
export { PageTemplates, PageOptionsEnum }
