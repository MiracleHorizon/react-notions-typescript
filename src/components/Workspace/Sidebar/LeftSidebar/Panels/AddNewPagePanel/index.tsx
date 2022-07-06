import React from 'react'
import { useCreateNewPage } from 'hooks/useCreateNewPage'

import addPageSvg from 'assets/img/plus-addPage.svg'
import { StyledPanel, Button, Icon, Title } from './AddNewPagePanel.styles'

const AddNewPagePanel: React.FC = () => {
  const onCreateNewPage = useCreateNewPage()

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
