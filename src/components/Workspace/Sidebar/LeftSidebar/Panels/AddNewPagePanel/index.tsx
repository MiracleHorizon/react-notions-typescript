import React, { FC, memo, useCallback } from 'react'
import { useAppDispatch } from 'redux/store'

import { PlusSvg } from 'components/ui/SVG'

import { createNewPage } from 'api/reduxAsyncThunks'
import { PanelWrapper, StyledPlusButton, Title } from './AddNewPagePanel.styles'

const AddNewPagePanel: FC = memo(() => {
  const appDispatch = useAppDispatch()

  const onCreateNewPage = useCallback((): void => {
    appDispatch(createNewPage({}))
  }, [appDispatch])

  return (
    <PanelWrapper onClick={onCreateNewPage}>
      <StyledPlusButton role='button'>
        <PlusSvg />
      </StyledPlusButton>
      <Title>New page</Title>
    </PanelWrapper>
  )
})

export default AddNewPagePanel
