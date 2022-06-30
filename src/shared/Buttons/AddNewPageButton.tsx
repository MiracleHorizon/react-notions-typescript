import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useCreateNewPage } from 'hooks/useCreateNewPage'

import Tooltip from '../Tooltip/Tooltip'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import addPageSvg from 'assets/img/plus-addPage.svg'
import styled from 'styled-components'

const StyledButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 13px;
  top: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border: none;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 2px;
  border-radius: 3px;
  opacity: 0.5;

  :hover {
    background: #e8e7e3;
    transition: background 0.2s ease-out;
  }
`

const AddNewPageButton: React.FC = () => {
  const { id } = useSelector(currentPageSelector)
  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)
  const onCreateNewPage = useCreateNewPage(id!)

  return (
    <StyledButton role='button' ref={buttonRef} onClick={onCreateNewPage}>
      <Icon src={addPageSvg} alt='Add page' />
      {isHovering && (
        <Tooltip
          title='Add a page'
          description='Only you can access these pages.'
          coords={{ top: '30px' }}
        />
      )}
    </StyledButton>
  )
}

export default AddNewPageButton
