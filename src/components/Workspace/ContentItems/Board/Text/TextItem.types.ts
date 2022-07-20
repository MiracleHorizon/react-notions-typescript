import { IListContentItem } from 'models/content/content.types'

export default interface BoardContentItemProps extends IListContentItem {
  itemIndex: number
}

export interface ItemStyles {
  textColor: string
  background: string
}
