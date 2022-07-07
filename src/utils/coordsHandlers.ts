import { ElementCoords } from '../@types/generalTypes'

const CHANGE_PAGE_TITLE_POPUP_WIDTH = 360

class RenamePopupCoordsHandler {
  public setCoordsByHeader(rect: DOMRect | undefined): ElementCoords {
    if (!rect) return {}

    return {
      left: rect.left - (CHANGE_PAGE_TITLE_POPUP_WIDTH - rect.width) / 2 + 'px',
      top: rect.bottom + 5 + 'px',
    }
  }

  public setCoordsBySidebar(rect: DOMRect | undefined): ElementCoords {
    if (!rect) return {}

    let leftCoords: number =
      rect.left - (CHANGE_PAGE_TITLE_POPUP_WIDTH - rect.width) / 2
    if (leftCoords < 0) leftCoords = 10

    return {
      left: leftCoords + 'px',
      top: rect.bottom + 8 + 'px',
    }
  }
}

const renamePopupCoordsHandler = new RenamePopupCoordsHandler()

export { renamePopupCoordsHandler }
