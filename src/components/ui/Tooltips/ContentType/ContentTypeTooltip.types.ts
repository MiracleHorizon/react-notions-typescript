import { ContentTypes } from 'models/content/content.types'
import { ElementCoords } from 'types'

export default interface ContentTypeTooltipProps extends ElementCoords {
  contentType: ContentTypes
}
