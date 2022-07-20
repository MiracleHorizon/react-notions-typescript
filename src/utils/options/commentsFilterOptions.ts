import { CommentsFilters } from 'redux/types'
import { ContentTypes } from 'models/content/content.types'

import textImg from 'assets/img/content_type_images/text-item-img.png'
import todoImg from 'assets/img/content_type_images/to_do_img.png'
import heading1Img from 'assets/img/content_type_images/heading_1_img.png'
import heading2Img from 'assets/img/content_type_images/heading_2_img.png'
import heading3Img from 'assets/img/content_type_images/heading_3_img.png'
import toggleHeading1Img from 'assets/img/content_type_images/toggle_heading_1.png'
import toggleHeading2Img from 'assets/img/content_type_images/toggle_heading_2.png'
import toggleHeading3Img from 'assets/img/content_type_images/toggle_heading_3.png'
import quoteImg from 'assets/img/content_type_images/quote_img.png'
import webBookmarkImg from 'assets/img/content_type_images/web_bookmark_img.png'
import dividerImg from 'assets/img/content_type_images/divider_img.png'

export const options = [
  { title: CommentsFilters.OPEN, description: 'Open comments' },
  { title: CommentsFilters.RESOLVED, description: 'Resolved comments' },
]

export const contentTypeOptions = [
  {
    title: 'Text',
    description: 'Just start writing with plain text.',
    imageUrl: `${textImg}`,
    type: ContentTypes.TEXT,
  },
  {
    title: 'Page',
    description: 'Embed a sub-page inside this page.',
    imageUrl: `${todoImg}`, //!
    type: ContentTypes.PAGE,
  },
  {
    title: 'To-do list',
    description: 'Track tasks with a to-do list.',
    imageUrl: `${todoImg}`,
    type: ContentTypes.TODO,
  },
  {
    title: 'Heading 1',
    description: 'Big section heading.',
    imageUrl: `${heading1Img}`,
    type: ContentTypes.HEADING_1,
  },
  {
    title: 'Heading 2',
    description: 'Medium section heading.',
    imageUrl: `${heading2Img}`,
    type: ContentTypes.HEADING_2,
  },
  {
    title: 'Heading 3',
    description: 'Small section heading.',
    imageUrl: `${heading3Img}`,
    type: ContentTypes.HEADING_3,
  },
  {
    title: 'Bulleted list',
    description: 'Create a simple bulleted list.',
    imageUrl: `${todoImg}`, //!
    type: ContentTypes.BULLETED_LIST,
  },
  {
    title: 'Numbered list',
    description: 'Create a list with numbering.',
    imageUrl: `${todoImg}`, //!
    type: ContentTypes.NUMBERED_LIST,
  },
  {
    title: 'Toggle list',
    description: 'Toggles can hide and show content inside.',
    imageUrl: `${todoImg}`, //!
    type: ContentTypes.TOGGLE_LIST,
  },
  {
    title: 'Toggle heading 1',
    description: 'Hide content inside a large heading.',
    imageUrl: `${toggleHeading1Img}`,
    type: ContentTypes.TOGGLE_HEADING_1,
  },
  {
    title: 'Toggle heading 2',
    description: 'Hide content inside a medium heading.',
    imageUrl: `${toggleHeading2Img}`,
    type: ContentTypes.TOGGLE_HEADING_2,
  },
  {
    title: 'Toggle heading 3',
    description: 'Hide content inside a small heading.',
    imageUrl: `${toggleHeading3Img}`,
    type: ContentTypes.TOGGLE_HEADING_3,
  },
  {
    title: 'Quote',
    description: 'Capture a quote.',
    imageUrl: `${quoteImg}`,
    type: ContentTypes.QUOTE,
  },
  {
    title: 'Divider',
    description: 'Visually divide blocks.',
    imageUrl: `${dividerImg}`,
    type: ContentTypes.DIVIDER,
  },
  {
    title: 'Web bookmark',
    description: 'Save a link as a visual bookmark.',
    imageUrl: `${webBookmarkImg}`,
    type: ContentTypes.WEB_BOOKMARK,
  },
  {
    title: 'Image',
    description: 'Upload or embed with a link.',
    imageUrl: `${todoImg}`, //!
    type: ContentTypes.IMAGE,
  },
  {
    title: 'Video',
    description: 'Embed from Youtube or something...',
    imageUrl: `${todoImg}`, //!
    type: ContentTypes.VIDEO,
  },
]
