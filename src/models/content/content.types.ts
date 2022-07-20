export enum ContentTypes {
  TEXT = 'Text',
  PAGE = 'Page',
  TODO = 'Todo',
  HEADING_1 = 'Heading1',
  HEADING_2 = 'Heading2',
  HEADING_3 = 'Heading3',
  TOGGLE_HEADING_1 = 'ToggleHeading1',
  TOGGLE_HEADING_2 = 'ToggleHeading2',
  TOGGLE_HEADING_3 = 'ToggleHeading3',
  BULLETED_LIST = 'BulletedList',
  NUMBERED_LIST = 'NumberedList',
  TOGGLE_LIST = 'ToggleList',
  QUOTE = 'Quote',
  WEB_BOOKMARK = 'WebBookmark',
  IMAGE = 'Image',
  VIDEO = 'Video',
  DIVIDER = 'Divider',
}

export enum ContentDatasets {
  TEXT = 'text-item',
  PAGE = 'page-item',
  TODO = 'todo-item',
  HEADING_1 = 'heading-1-item',
  HEADING_2 = 'heading-2-item',
  HEADING_3 = 'heading-3-item',
  TOGGLE_HEADING_1 = 'toggle-heading-1-item',
  TOGGLE_HEADING_2 = 'toggle-heading-2-item',
  TOGGLE_HEADING_3 = 'toggle-heading-3-item',
  TOGGLE_LIST = 'toggle-list-item',
  BULLETED_LIST = 'bulleted-list-item',
  NUMBERED_LIST = 'numbered-list-item',
  WEB_BOOKMARK = 'web-bookmark-item',
  QUOTE = 'quote-item',
  IMAGE = 'image-item',
  VIDEO = 'video-item',
  DIVIDER = 'divider-item',
}

export interface TextColors {
  Default: {
    color: string
    fill: string
  }
  Gray: {
    color: string
    fill: string
  }
  Brown: {
    color: string
    fill: string
  }
  Orange: {
    color: string
    fill: string
  }
  Yellow: {
    color: string
    fill: string
  }
  Green: {
    color: string
    fill: string
  }
  Blue: {
    color: string
    fill: string
  }
  Purple: {
    color: string
    fill: string
  }
  Pink: {
    color: string
    fill: string
  }
  Red: {
    color: string
    fill: string
  }
}

export interface BackgroundColors {
  Default: {
    background: string
  }
  Gray: {
    background: string
  }
  Brown: {
    background: string
  }
  Orange: {
    background: string
  }
  Yellow: {
    background: string
  }
  Green: {
    background: string
  }
  Blue: {
    background: string
  }
  Purple: {
    background: string
  }
  Pink: {
    background: string
  }
  Red: {
    background: string
  }
}

export interface IListContentItem {
  _id?: string //!
  isExpanded: boolean
  parent: string | null
  content: string
  contentType: ContentTypes
  textColor: string
  background: string
  commentsInfo: {
    isHasComments: boolean
    comments: []
  }
}

export type TList =
  | ContentTypes.BULLETED_LIST
  | ContentTypes.NUMBERED_LIST
  | ContentTypes.TOGGLE_LIST
