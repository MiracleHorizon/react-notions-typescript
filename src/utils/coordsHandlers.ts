import { ElementCoords } from 'types'

export type NodeRect = DOMRect | undefined
export interface ElementSizes {
  width: number
  height: number
}

// Попробовать сделать декоратор - if (!rect) return {}
class Coords {
  renamePopupWidth: number = 360
  changeIconPopupWidth: number = 420
  changeCoverPopupWidth: number = 540
  changeIconTooltipWidth: number = 85
  createBookmarkPopupWidth: number = 300
  createBookmarkPopupHeight: number = 130
}

class RenamePopupCoordsHandler extends Coords {
  public header(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    let leftPosition: number =
      rect.left - (this.renamePopupWidth - rect.width) / 2
    if (leftPosition <= 0) leftPosition = 15

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 5 + 'px',
    }
  }

  public sidebar(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    let leftPosition: number =
      rect.left - (this.renamePopupWidth - rect.width) / 2
    if (leftPosition <= 0) leftPosition = 15

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 8 + 'px',
    }
  }
}

class ChangeIconPopupCoordsHandler extends Coords {
  public workspace(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    let leftPosition: number =
      rect.left - (this.changeIconPopupWidth - rect.width) / 2
    if (leftPosition <= 0) leftPosition = 15

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 8 + 'px',
    }
  }

  public sidebar(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    return {
      left: '15px',
      top: rect.bottom + 8 + 'px',
    }
  }

  public renamePopup(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    let leftPosition: number =
      rect.left - (this.changeIconPopupWidth - rect.width) / 2
    if (leftPosition <= 0) leftPosition = 15

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 8 + 'px',
    }
  }
}

class ChangeCoverPopupCoordsHandler extends Coords {
  public coverButton(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    const bodyWidth = document.body.offsetWidth
    let leftPosition: number =
      rect.left - (this.changeCoverPopupWidth - rect.width) / 2

    if (leftPosition + this.changeCoverPopupWidth >= bodyWidth) {
      leftPosition = leftPosition - 70
    }

    return {
      left: leftPosition + 'px',
      top: rect.bottom + 15 + 'px',
    }
  }
}

//! Coords
class CommentOptionsPopupHandler {
  private popupSizes: ElementSizes

  constructor(params: ElementSizes) {
    this.popupSizes = params
  }

  public setCoordsByButton(rect: NodeRect, index: number): ElementCoords {
    if (!rect) return {}

    const bodyWidth = document.body.offsetWidth
    let leftPosition = rect.right + 5

    if (rect.right + this.popupSizes.width >= bodyWidth) {
      leftPosition = rect.left - this.popupSizes.width - (index === 0 ? 65 : 5)
    }

    return {
      left: leftPosition + 'px',
      top: rect.top + rect.height / 2 - this.popupSizes.height / 2 + 'px',
    }
  }
}

class TooltipCoordsHandler extends Coords {
  public header(tooltipRect: NodeRect, parentRect: NodeRect): ElementCoords {
    if (!parentRect || !tooltipRect) return {}

    const bodyWidth = document.body.offsetWidth
    let rightPosition: number =
      parentRect.right - (tooltipRect.width - parentRect.width) / 2
    if (rightPosition + tooltipRect.width >= bodyWidth) {
      rightPosition = 5
    }

    return {
      top: parentRect.bottom + 7 + 'px',
      right: rightPosition + 'px',
    }
  }

  public changeIcon(rect: NodeRect) {
    if (!rect) return {}

    return {
      left: rect.left - (this.changeIconTooltipWidth - rect.width) / 2 + 'px',
      top: '30px',
    }
  }
}

class BookmarkPopupCoordsHandler extends Coords {
  item(rect: NodeRect): ElementCoords {
    if (!rect) return {}

    const bodyHeight = document.body.offsetHeight

    let left: string =
      rect.left - (this.createBookmarkPopupWidth - rect.width) / 2 + 'px'

    let top: number = rect.bottom + 4
    if (top + this.createBookmarkPopupHeight + 10 >= bodyHeight) {
      top = bodyHeight - this.createBookmarkPopupHeight - 10
    }

    return {
      left,
      top: top + 'px',
    }
  }
}

const renamePopupCoordsHandler = new RenamePopupCoordsHandler()
const changeIconPopupCoordsHandler = new ChangeIconPopupCoordsHandler()
const changeCoverPopupCoordsHandler = new ChangeCoverPopupCoordsHandler()
const commentOptionsPopupCoordsHandler = new CommentOptionsPopupHandler({
  width: 180,
  height: 64,
})
const tooltipCoordsHandler = new TooltipCoordsHandler()
const bookmarkPopupCoordsHandler = new BookmarkPopupCoordsHandler()

export {
  renamePopupCoordsHandler,
  changeIconPopupCoordsHandler,
  changeCoverPopupCoordsHandler,
  commentOptionsPopupCoordsHandler,
  bookmarkPopupCoordsHandler,
  tooltipCoordsHandler,
}
