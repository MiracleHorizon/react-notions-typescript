import React, { FC, memo, useCallback, useMemo } from 'react'
import { useAppDispatch } from 'redux/store'

import { PagesListItemOptionsButton, AddNewPageButton } from 'components/ui'

import { INotionPage } from 'redux/types'
import { createNewPage } from 'api/reduxAsyncThunks'
import titleHandler from 'helpers/pages/pagesItemOptionsTitleHandler'

const PageItemOptions: FC<INotionPage> = memo(props => {
  const appDispatch = useAppDispatch()

  const listItemOptionsTitle = useMemo(
    () => titleHandler(props.isFavorite),
    [props.isFavorite]
  )

  const addNewPageButtonCoords = useMemo(() => {
    return { top: '4px', right: '8px' }
  }, [])

  const onAddNewDependentPage = useCallback(
    (e: React.MouseEvent): void => {
      e.stopPropagation()

      appDispatch(createNewPage({ _id: props._id }))
    },
    [appDispatch, props._id]
  )

  return (
    <>
      <PagesListItemOptionsButton
        title={listItemOptionsTitle}
        page={{ ...props }}
      />
      <AddNewPageButton
        tooltipTitle='Quickly add a page inside'
        coords={addNewPageButtonCoords}
        onClickAction={onAddNewDependentPage}
      />
    </>
  )
})

export default PageItemOptions
