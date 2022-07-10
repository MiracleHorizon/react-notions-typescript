import { ElementCoords } from 'types'

const RENAME_POPUP_WIDTH = 360
const CHANGE_ICON_POPUP_WIDTH = 420
const CHANGE_COVER_POPUP_WIDTH = 540

type NodeRect = DOMRect | undefined

// Попробовать сделать декоратор - if (!rect) return {}

class RenamePopupCoordsHandler {
  public setCoordsByHeader(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    let leftPosition: number = rect.left - (RENAME_POPUP_WIDTH - rect.width) / 2
    if (leftPosition <= 0) leftPosition = 15

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 5 + 'px',
    }
  }

  public setCoordsBySidebar(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    let leftPosition: number = rect.left - (RENAME_POPUP_WIDTH - rect.width) / 2
    if (leftPosition <= 0) leftPosition = 15

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 8 + 'px',
    }
  }
}

class ChangeIconPopupCoordsHandler {
  public setCoordsByWorkspace(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    let leftPosition: number =
      rect.left - (CHANGE_ICON_POPUP_WIDTH - rect.width) / 2
    if (leftPosition <= 0) leftPosition = 15

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 8 + 'px',
    }
  }

  public setCoordsBySidebar(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    return {
      left: '15px',
      top: rect.bottom + 8 + 'px',
    }
  }

  public setCoordsByRenamePopup(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    let leftPosition: number =
      rect.left - (CHANGE_ICON_POPUP_WIDTH - rect.width) / 2
    if (leftPosition <= 0) leftPosition = 15

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 8 + 'px',
    }
  }
}

class ChangeCoverPopupCoordsHandler {
  public setCoordsByCoverButton(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    let leftPosition: number =
      rect.left - (CHANGE_COVER_POPUP_WIDTH - rect.width) / 2
    if (leftPosition + CHANGE_COVER_POPUP_WIDTH >= document.body.offsetWidth) {
      leftPosition = leftPosition - 70
    }

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 15 + 'px',
    }
  }
}

const renamePopupCoordsHandler = new RenamePopupCoordsHandler()
const changeIconPopupCoordsHandler = new ChangeIconPopupCoordsHandler()
const changeCoverPopupCoordsHandler = new ChangeCoverPopupCoordsHandler()

export {
  renamePopupCoordsHandler,
  changeIconPopupCoordsHandler,
  changeCoverPopupCoordsHandler,
}
