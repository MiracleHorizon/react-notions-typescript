import { CoverColors } from '../workSpaceSlice/types'

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

interface CoversList {
  title: string
  covers: CoverColors[]
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
  selectedCover: string
  selectedIcon: string
}

export type { ChangeDecorState }
export { ChangeCoverCategories, ChangeIconCategories }
