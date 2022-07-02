interface IOptionItem {
  title: string
  imgUrl: string
}

interface IPageFont {
  title: string
  tooltipTitle: string
}

interface IPageSettingsOptions {
  pageCustomizeOptions?: IOptionItem[]
  pageShareOptions: IOptionItem[]
  pageChangesOptions: IOptionItem[]
}

interface IPagesSliceState {
  favoritePageOptions: IOptionItem[]
  privatePagesOptions: IOptionItem[]
}

interface EmptyPageOption {
  title: string
  img: string
  action: () => void
}

export type {
  IPagesSliceState,
  IOptionItem,
  IPageSettingsOptions,
  IPageFont,
  EmptyPageOption,
}
