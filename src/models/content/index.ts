import { ContentTypes, IListContentItem } from './content.types'

export const defaultContentItem: IListContentItem = {
  parent: null,
  isExpanded: true, //!
  content: '',
  contentType: ContentTypes.TEXT,
  textColor: 'Default',
  background: 'Default',
  commentsInfo: {
    isHasComments: false,
    comments: [],
  },
}
