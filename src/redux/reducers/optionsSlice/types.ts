import { FC } from 'react'
import { TPageFont } from '../notionsSlice/types'

interface EmptyPageOption {
  title: string
  IconSVG: FC
  action: () => void
} //!

interface IPageFont {
  title: string
  tooltipTitle: string
  fontFamily: TPageFont
}

export type { IPageFont, EmptyPageOption }
