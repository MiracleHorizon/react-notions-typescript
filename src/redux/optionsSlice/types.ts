import { FC } from 'react'
import { PageFontFamilies } from '../workSpaceSlice/types'

interface EmptyPageOption {
  title: string
  IconSVG: FC
  action: () => void
} //!

interface IPageFont {
  title: string
  tooltipTitle: string
  fontFamily: PageFontFamilies
}

export type { IPageFont, EmptyPageOption }
