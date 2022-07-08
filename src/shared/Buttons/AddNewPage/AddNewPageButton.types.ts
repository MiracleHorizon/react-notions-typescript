import { ElementCoords } from 'types'
import React from 'react'

export default interface AddNewPageButtonProps {
  tooltipTitle?: string
  tooltipDescription?: string
  coords: ElementCoords
  onClickAction: (e: React.MouseEvent) => void
}
