import { SetStateAction } from 'react'

import { IWorkspacePage } from 'redux/workSpaceSlice/types'
import { ElementCoords } from '../../../../../@types/generalTypes'

interface PagesListProps {
  pages: IWorkspacePage[] | IWorkspacePage
  setItemCoords?: SetStateAction<ElementCoords>
}

export type { PagesListProps }
