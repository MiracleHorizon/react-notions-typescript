import { SetStateAction } from 'react'

import { ElementCoords } from 'types'
import { IWorkspacePage } from 'redux/reducers/workSpaceSlice/types'
import { INotionPage } from '../../../../../redux/reducers/notionsSlice/types'

export default interface PagesListProps {
  // notions: IWorkspacePage[] | IWorkspacePage
  pages: INotionPage[] | INotionPage
  setItemCoords?: SetStateAction<ElementCoords>
  paddingLeft: number
}
