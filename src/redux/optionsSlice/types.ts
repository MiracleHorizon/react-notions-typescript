import { FC } from 'react'

interface IOptionItem {
  title: string
  imgUrl?: string
}

interface IPageFont {
  title: string
  tooltipTitle: string
}

interface IPagesSliceState {
  favoritePageOptions: IOptionItem[]
  privatePagesOptions: IOptionItem[]
}

interface EmptyPageOption {
  title: string
  IconSVG: FC
  action: () => void
}

export type { IPagesSliceState, IOptionItem, IPageFont, EmptyPageOption }
