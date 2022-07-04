import { useDispatch, useSelector } from 'react-redux'
import { createNewPage, setCurrentPage } from 'redux/workSpaceSlice/slice'
import { closeRightSidebar, setActivePage } from 'redux/sidebarsSlice/slice'
import { workspacePagesSelector } from 'redux/workSpaceSlice/selectors'
import { newPageConstructor } from 'utils/NewPage'

export const useCreateNewPage = (id: number): (() => void) => {
  const workspacePages = useSelector(workspacePagesSelector)
  const dispatch = useDispatch()

  return (): void => {
    const newPage = newPageConstructor()
    newPage.id = workspacePages.length + 1

    dispatch(createNewPage(newPage))
    dispatch(setCurrentPage(newPage.id))
    dispatch(setActivePage({ title: newPage.title, id }))
    dispatch(closeRightSidebar())
  }
}
