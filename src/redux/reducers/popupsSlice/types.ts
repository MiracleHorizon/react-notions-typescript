import { ElementCoords } from 'types'
import { IconInfo, INotionPage } from 'redux/types'

export enum PageTemplates {
  BOARD = 'Board',
  TASK_LIST = 'Task list',
}

export enum PageOptionsEnum {
  FAVORITES = 'Favorites',
  COMMON = 'Common',
}

interface RenamableEntity {
  _id: string
  title: string
  iconInfo: IconInfo
} //!

interface PopupInitialState {
  isOpen: boolean
}

interface PageOptionsPopupState extends PopupInitialState {
  options: PageOptionsEnum | []
  coords: ElementCoords
  page: INotionPage
}

interface MovePagePopupState extends PopupInitialState {
  coords: ElementCoords
  entity: INotionPage | any //!
}

interface RenamePopupState extends PopupInitialState {
  coords: ElementCoords
  entity: INotionPage //! Убрать renamable entity
}

interface PageSettingsPopupState extends PopupInitialState {
  pageTemplate: PageTemplates // | null
}

interface PageIconPopup extends PopupInitialState {
  coords: ElementCoords
  page: INotionPage
}

interface PageCoverPopup extends PopupInitialState {
  coords: ElementCoords
  page: INotionPage
}

interface CommentOptionsPopup extends PopupInitialState {
  coords: ElementCoords
  commentId: string
}

interface ContentOptionsPopup extends PopupInitialState {
  coords: ElementCoords
  itemIndex: number
}

interface ContentStylesPopup extends PopupInitialState {
  coords: ElementCoords
  itemIndex: number
}

interface ContentTypesPopup extends PopupInitialState {
  coords: ElementCoords
  itemId: string
}

interface PopupsState {
  appSettingsPopup: PopupInitialState
  pageIconPopup: PageIconPopup
  pageCoverPopup: PageCoverPopup
  renamePopup: RenamePopupState
  movePagePopup: MovePagePopupState
  pageOptionsPopup: PageOptionsPopupState
  pageSettingsPopup: PageSettingsPopupState
  commentOptionsPopup: CommentOptionsPopup
  contentOptionsPopup: ContentOptionsPopup
  contentStylesPopup: ContentStylesPopup
  contentTypesPopup: ContentTypesPopup
  isQuickSearchPopupOpen: boolean
  isPagesTrashPopupOpen: boolean
  isPageCustomizePopupOpen: boolean
}

export type {
  PopupInitialState,
  PopupsState,
  PageOptionsPopupState,
  PageSettingsPopupState,
  PageIconPopup,
  PageCoverPopup,
  MovePagePopupState,
  RenamableEntity,
  RenamePopupState,
  CommentOptionsPopup,
  ContentOptionsPopup,
  ContentStylesPopup,
}
