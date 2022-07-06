import { ElementCoords } from '../../../@types/generalTypes'

const CHANGE_PAGE_TITLE_POPUP_WIDTH = 360

export const coordsHandler = {
  headerPopup: (rect: DOMRect | undefined): ElementCoords => {
    if (!rect) return {}

    return {
      left: rect.left - (CHANGE_PAGE_TITLE_POPUP_WIDTH - rect.width) / 2 + 'px',
      top: rect.bottom + 5 + 'px',
    }
  },
  sidebarPopup: (rect: DOMRect | undefined): ElementCoords => {
    if (!rect) return {}

    let leftCoords: number =
      rect.left - (CHANGE_PAGE_TITLE_POPUP_WIDTH - rect.width) / 2
    if (leftCoords < 0) leftCoords = 20

    return {
      left: leftCoords + 'px',
      top: rect.bottom + 5 + 'px',
    }
  },
}
