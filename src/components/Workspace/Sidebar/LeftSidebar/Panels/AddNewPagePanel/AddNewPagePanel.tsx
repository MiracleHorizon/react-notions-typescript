import React from 'react'
import { useSelector } from 'react-redux'
import { useCreateNewPage } from 'hooks/useCreateNewPage'

import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import addPageSvg from 'assets/img/plus-addPage.svg'
import { StyledPanel, Button, Icon, Title } from './AddNewPagePanel.styles'

const AddNewPagePanel: React.FC = () => {
  const { id } = useSelector(currentPageSelector)
  const onCreateNewPage = useCreateNewPage(id)

  return (
    <StyledPanel onClick={onCreateNewPage}>
      <Button role='button'>
        <Icon src={addPageSvg} alt='Add page' />
      </Button>
      <Title>New page</Title>
    </StyledPanel>
  )
}

export default AddNewPagePanel
