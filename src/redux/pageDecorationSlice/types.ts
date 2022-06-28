import { CoverColors } from '../workSpaceSlice/types'

enum SwitchCoverCategories {
  GALLERY = 'Gallery',
  UPLOAD = 'Upload',
  LINK = 'Link',
}
enum SwitchIconCategories {
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

interface SwitchCoverState {
  isCoverModalOpen: boolean
  isIconModalOpen: boolean
  coverCategories: SwitchCoverCategories[]
  iconCategories: SwitchIconCategories[]
  coversLists: CoversList[]
  iconsLists: IconsList[]
  selectedCoverCategory: string
  selectedIconCategory: string
  selectedCover: string
  selectedIcon: string
}

export type { SwitchCoverState }
export { SwitchCoverCategories, SwitchIconCategories }
