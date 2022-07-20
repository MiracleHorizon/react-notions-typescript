import { Dispatch, SetStateAction } from 'react'
import { ElementCoords } from 'types'

export default interface CreateBookmarkPopupProps {
  itemId: string
  coords: ElementCoords
  setPopupOpen: Dispatch<SetStateAction<boolean>>
}
