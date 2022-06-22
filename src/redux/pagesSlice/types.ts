interface IUserBarItem {
  title: string
  imgUrl: string
}

interface IPagesSliceState {
  userBarItems: IUserBarItem[]
  privatePages: string[]
  favoritePages: string[] | []
}

export type { IPagesSliceState, IUserBarItem }
