import { LoadingStatuses } from 'api/types'

enum ChangeCoverCategories {
  GALLERY = 'Gallery',
  UPLOAD = 'Upload',
  LINK = 'Link',
}
enum ChangeIconCategories {
  EMOJI = 'Emoji',
  UPLOAD = 'Upload an image',
  LINK = 'Link',
}

interface ImgCover {
  tooltipTitle?: string
  tooltipDescription?: string
  coverImg: string
}

interface CoversList {
  title: string
  content: ImgCover[]
}

interface IconsList {
  title: string
  icons: []
}

interface ChangeDecorState {
  isCoverModalOpen: boolean
  isIconModalOpen: boolean
  coverCategories: ChangeCoverCategories[]
  iconCategories: ChangeIconCategories[]
  coversLists: CoversList[]
  iconsLists: IconsList[]
  selectedCoverCategory: string
  selectedIconCategory: string
  coversLoadingStatus: LoadingStatuses
  emojiLoadingStatus: LoadingStatuses
}

export type { ChangeDecorState, ImgCover, CoversList }
export { ChangeCoverCategories, ChangeIconCategories }
