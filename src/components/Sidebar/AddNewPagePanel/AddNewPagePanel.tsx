import React from 'react'
import { useSelector } from 'react-redux'
import { useCreateNewPage } from 'hooks/useCreateNewPage'

import { Panel, Button, Icon, Title } from './AddNewPagePanel.styles'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import addPageSvg from 'assets/img/plus-addPage.svg'

const AddNewPagePanel: React.FC = () => {
  const { id } = useSelector(currentPageSelector)
  const onCreateNewPage = useCreateNewPage(id!)

  return (
    <Panel onClick={onCreateNewPage}>
      <Button role='button'>
        <Icon src={addPageSvg} alt='Add page' />
      </Button>
      <Title>New page</Title>
    </Panel>
  )
}

export default AddNewPagePanel
