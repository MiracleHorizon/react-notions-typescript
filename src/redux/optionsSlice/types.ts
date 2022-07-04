import { FC } from 'react'

interface IOptionItem {
  title: string
  IconSVG: FC
  action: () => void
}

interface EmptyPageOption {
  title: string
  IconSVG: FC
  action: () => void
} //!

interface IPageFont {
  title: string
  tooltipTitle: string
}

interface IPagesSliceState {
  favoritePageOptions: IOptionItem[]
  commonPageOptions: IOptionItem[]
}

export type { IPagesSliceState, IOptionItem, IPageFont, EmptyPageOption }
