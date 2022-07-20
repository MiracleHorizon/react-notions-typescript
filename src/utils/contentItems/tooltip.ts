import { ContentTypes } from 'models/content/content.types'

import textTooltip from 'assets/img/content_type_tooltips/text.png'
import pageTooltip from 'assets/img/content_type_tooltips/page.png'
import todoTooltip from 'assets/img/content_type_tooltips/to_do_list.png'
import quoteTooltip from 'assets/img/content_type_tooltips/quote.png'
import h1Tooltip from 'assets/img/content_type_tooltips/header.png'
import h2Tooltip from 'assets/img/content_type_tooltips/header_2.png'
import h3Tooltip from 'assets/img/content_type_tooltips/header_3.png'
import toggleH1Tooltip from 'assets/img/content_type_tooltips/toggle_h1.png'
import toggleH2Tooltip from 'assets/img/content_type_tooltips/toggle_h2.png'
import toggleH3Tooltip from 'assets/img/content_type_tooltips/toggle_h3.png'
import bullListTooltip from 'assets/img/content_type_tooltips/bulleted_list.png'
import numListTooltip from 'assets/img/content_type_tooltips/numbered_list.png'
import toggleListTooltip from 'assets/img/content_type_tooltips/toggle_list.png'
import dividerTooltip from 'assets/img/content_type_tooltips/divider.png'
import webBookmarkTooltip from 'assets/img/content_type_tooltips/web_bookmark.png'
import imageTooltip from 'assets/img/content_type_tooltips/image.png'
import videoTooltip from 'assets/img/content_type_tooltips/video.png'

interface TooltipParams {
  title: string
  imageUrl: string
}

export class TooltipHandler {
  constructor(public type: ContentTypes) {}

  getParams(): TooltipParams {
    switch (this.type) {
      case ContentTypes.TEXT:
        return {
          title: 'Just start writing with plain text.',
          imageUrl: `${textTooltip}`,
        }
      case ContentTypes.PAGE:
        return {
          title: 'Track tasks with a to-do list.',
          imageUrl: `${pageTooltip}`,
        }
      case ContentTypes.TODO:
        return {
          title: 'Track tasks with a to-do list.',
          imageUrl: `${todoTooltip}`,
        }
      case ContentTypes.HEADING_1:
        return {
          title: 'Big section heading.',
          imageUrl: `${h1Tooltip}`,
        }
      case ContentTypes.HEADING_2:
        return {
          title: 'Medium section heading.',
          imageUrl: `${h2Tooltip}`,
        }
      case ContentTypes.HEADING_3:
        return {
          title: 'Small section heading.',
          imageUrl: `${h3Tooltip}`,
        }
      case ContentTypes.TOGGLE_HEADING_1:
        return {
          title: 'Hide content inside a large heading.',
          imageUrl: `${toggleH1Tooltip}`,
        }
      case ContentTypes.TOGGLE_HEADING_2:
        return {
          title: 'Hide content inside a medium heading.',
          imageUrl: `${toggleH2Tooltip}`,
        }
      case ContentTypes.TOGGLE_HEADING_3:
        return {
          title: 'Hide content inside a small heading.',
          imageUrl: `${toggleH3Tooltip}`,
        }
      case ContentTypes.QUOTE:
        return {
          title: 'Capture a quote.',
          imageUrl: `${quoteTooltip}`,
        }
      case ContentTypes.BULLETED_LIST:
        return {
          title: 'Create a simple bulleted list.',
          imageUrl: `${bullListTooltip}`,
        }
      case ContentTypes.NUMBERED_LIST:
        return {
          title: 'Create a list with numbering.',
          imageUrl: `${numListTooltip}`,
        }
      case ContentTypes.TOGGLE_LIST:
        return {
          title: 'Toggles can hide and show content inside.',
          imageUrl: `${toggleListTooltip}`,
        }
      case ContentTypes.DIVIDER:
        return {
          title: 'Visually divide blocks.',
          imageUrl: `${dividerTooltip}`,
        }
      case ContentTypes.WEB_BOOKMARK:
        return {
          title: 'Save a link as a visual bookmark.',
          imageUrl: `${webBookmarkTooltip}`,
        }
      case ContentTypes.IMAGE:
        return {
          title: 'Upload or embed with a link.',
          imageUrl: `${imageTooltip}`,
        }
      case ContentTypes.VIDEO:
        return {
          title: 'Embed from Youtube or something...',
          imageUrl: `${videoTooltip}`,
        }
      default:
        return {
          title: 'No image',
          imageUrl: '',
        }
    }
  }

  setCoords() {}
}
