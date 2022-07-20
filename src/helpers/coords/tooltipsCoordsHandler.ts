import { ElementCoords } from 'types'
import { NodeRect } from 'utils/coordsHandlers'

class TooltipsCoordsHandler {
  contentTypeTooltipSizes = 155


  contentType(rect: NodeRect): ElementCoords {
    if (!rect) return {}
    const bodyWidth = document.body.offsetWidth

    let lPos = rect.right + 10
    let tPos = rect.top - (this.contentTypeTooltipSizes / 2)

    if (lPos + this.contentTypeTooltipSizes >= bodyWidth) {
      lPos = bodyWidth - this.contentTypeTooltipSizes - 10
    }

    return {
      left: lPos + 'px',
      top: tPos + 'px'
    }
  }
}

export const tooltipsCoordsHandler = new TooltipsCoordsHandler()
