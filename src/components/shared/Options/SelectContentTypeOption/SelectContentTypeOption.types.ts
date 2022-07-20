import { ActiveListItem } from 'types'
import { ContentTypes } from 'models/content/content.types'
import { TParent } from 'features/Items'

export default interface SelectContentTypeOptionProps extends ActiveListItem {
  title: string
  description: string
  imageUrl: string
  type: ContentTypes
  parent?: TParent
}
