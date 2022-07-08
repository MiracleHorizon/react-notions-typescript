import { ElementCoords } from 'types'
import { IconInfo } from 'components/PageTemplates/NewPage/types'

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
  iconInfo: IconInfo
}

interface PopupInitialState {
  isOpen: boolean
}

interface PageOptionsPopupState extends PopupInitialState {
  options: PageOptionsEnum | []
  coords: ElementCoords
  pageId: number
}

interface MovePagePopupState extends PopupInitialState {
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
  isQuickSearchPopupOpen: boolean
  isPagesTrashPopupOpen: boolean
  pageIconPopup: PageIconPopup
  pageCoverPopup: PopupInitialState
  renamePopup: RenamePopupState
  movePagePopup: MovePagePopupState
  pageOptionsPopup: PageOptionsPopupState
  pageSettingsPopup: PageSettingsPopupState
}

export type {
  PopupInitialState,
  PopupsState,
  PageOptionsPopupState,
  PageSettingsPopupState,
  PageIconPopup,
  MovePagePopupState,
  RenamableEssence,
  RenamePopupState,
}
export { PageTemplates, PageOptionsEnum }
