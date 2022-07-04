import { SetStateAction } from 'react'

import { IWorkspacePage } from 'redux/workSpaceSlice/types'
import { IElementCoords } from '../../../../../@types/types'

interface PagesListProps {
  pages: IWorkspacePage[] | IWorkspacePage
  setItemCoords?: SetStateAction<IElementCoords>
}

export type { PagesListProps }
