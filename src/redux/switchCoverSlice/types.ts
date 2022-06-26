import { CoverColors } from '../workSpaceSlice/types'

enum NavbarCategories {
  GALLERY = 'Gallery',
  UPLOAD = 'Upload',
  LINK = 'Link',
}

interface CoversList {
  title: string
  covers: CoverColors[]
}

interface SwitchCoverState {
  isModalOpen: boolean
  categories: NavbarCategories[]
  coversLists: CoversList[]
  selectedCategory: string
  selectedCover: any
}

export type { SwitchCoverState }
export { NavbarCategories }
