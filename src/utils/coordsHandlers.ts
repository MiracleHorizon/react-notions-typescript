import { ElementCoords } from '../@types/generalTypes'

const RENAME_POPUP_WIDTH = 360
const CHANGE_ICON_POPUP_WIDTH = 420

class RenamePopupCoordsHandler {
  public setCoordsByHeader(rect: DOMRect | undefined): ElementCoords {
    if (!rect) return {}

    return {
      left: rect.left - (RENAME_POPUP_WIDTH - rect.width) / 2 + 'px',
      top: rect.bottom + 5 + 'px',
    }
  }

  public setCoordsBySidebar(rect: DOMRect | undefined): ElementCoords {
    if (!rect) return {}

    let leftPosition: number = rect.left - (RENAME_POPUP_WIDTH - rect.width) / 2
    if (leftPosition < 0) leftPosition = 10

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 8 + 'px',
    }
  }
}

class ChangeIconPopupCoordsHandler {
  public setCoordsByWorkspace(rect: DOMRect | undefined) {
    if (!rect) return {}

    return {
      left: rect.left - (CHANGE_ICON_POPUP_WIDTH - rect.width) / 2 + 'px',
      top: rect.bottom + 8 + 'px',
    }
  }

  public setCoordsBySidebar(rect: DOMRect | undefined) {
    if (!rect) return {}

    return {
      left: '15px',
      top: rect.bottom + 8 + 'px',
    }
  }

  public setCoordsByRenamePopup(rect: DOMRect | undefined) {
    if (!rect) return {}

    let leftPosition: number =
      rect.left - (CHANGE_ICON_POPUP_WIDTH - rect.width) / 2
    if (leftPosition < 0) leftPosition = 15

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 8 + 'px',
    }
  }
}

const renamePopupCoordsHandler = new RenamePopupCoordsHandler()
const changeIconPopupCoordsHandler = new ChangeIconPopupCoordsHandler()

export { renamePopupCoordsHandler, changeIconPopupCoordsHandler }
