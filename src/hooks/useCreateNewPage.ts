import { useDispatch, useSelector } from 'react-redux'
import { workspacePagesSelector } from '../redux/workSpaceSlice/selectors'
import { newPageConstructor } from '../utils/defaultPageSettings'
import { createNewPage, setCurrentPage } from '../redux/workSpaceSlice/slice'

export const useCreateNewPage = (): (() => void) => {
  const workspacePages = useSelector(workspacePagesSelector)

  const dispatch = useDispatch()
  return (): void => {
    const newPage = newPageConstructor()
    newPage.id = workspacePages.length + 1

    dispatch(createNewPage(newPage))
    dispatch(setCurrentPage(newPage.id))
  }
}
