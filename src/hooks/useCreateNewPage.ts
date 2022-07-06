import { useDispatch } from 'react-redux'
import { createNewPage, setCurrentPage } from 'redux/workSpaceSlice/slice'
import { closeRightSidebar, setActivePage } from 'redux/sidebarsSlice/slice'
import { newPageConstructor } from 'utils/NewPage'

export const useCreateNewPage = (): (() => void) => {
  const dispatch = useDispatch()

  return (): void => {
    const newPage = newPageConstructor()
    newPage.id = Math.random()

    dispatch(createNewPage(newPage))
    dispatch(setCurrentPage(newPage.id))
    dispatch(setActivePage({ title: newPage.title, id: newPage.id }))
    dispatch(closeRightSidebar())
  }
}
