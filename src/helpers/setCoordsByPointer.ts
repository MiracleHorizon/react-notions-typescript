import React from 'react'
import { ElementCoords } from 'types'

export const setCoordsByPointer = (e: React.MouseEvent): ElementCoords => {
  return {
    left: e.clientX - 2 + 'px',
    top: e.clientY - 2 + 'px',
  }
}

// export default setCoordsByPointer()
