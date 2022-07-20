import { ContentDatasets, IListContentItem } from 'models/content/content.types'

export interface ItemWrapperProps {
  children: JSX.Element
  itemIndex: number
  height?: number
  optionsPanelTopOffset?: number | string
  dataContent: ContentDatasets
}

export default interface ContentItemProps extends IListContentItem {
  itemIndex: number
  dependencies?: []
}
