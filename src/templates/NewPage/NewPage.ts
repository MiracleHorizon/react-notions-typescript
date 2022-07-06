import { CommentsInfo, CoverInfo, DefaultPageParams, IconInfo } from './types'

export default class NewPage implements DefaultPageParams {
  readonly id: number
  title: string
  coverInfo: CoverInfo
  iconInfo: IconInfo
  commentsInfo: CommentsInfo
  isFavorite: boolean

  constructor(params: DefaultPageParams) {
    this.id = params.id
    this.title = params.title
    this.coverInfo = params.coverInfo
    this.iconInfo = params.iconInfo
    this.commentsInfo = params.commentsInfo
    this.isFavorite = params.isFavorite
  }
}
