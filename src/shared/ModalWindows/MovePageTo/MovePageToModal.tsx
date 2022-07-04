import React, { Fragment, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useInput } from 'hooks/useInput/useInput'
import { useSelectItem } from 'hooks/useSelectItem'

import Modal from '../Modal'
import OutlineInput from '../../Inputs/OutlineInput'
import MovePageToModalItem from './MovePageToModalItem/MovePageToModalItem'
import {
  currentPageSelector,
  workspacePagesSelector,
} from 'redux/workSpaceSlice/selectors'
import { closeMovePageToModal } from 'redux/modalsSlice/slice'
import { IElementCoords } from '../../../@types/generalTypes'
import {
  StyledModal,
  Container,
  InputContainer,
  Content,
  CommonPagesItem,
  AvatarContainer,
  Avatar,
  MoveToTitle,
  CommonPagesTitle,
} from './MovePageToModal.styles'
import avatar from 'assets/img/Avatar1.jpg'

const MovePageToModal: React.FC<{ coords: IElementCoords }> = ({ coords }) => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const { activeItem, onSelectItem } = useSelectItem('')
  const { id } = useSelector(currentPageSelector)
  const workspacePages = useSelector(workspacePagesSelector)
  const modalRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onMovePageToAnotherList = (selectedPageId: number): void => {
    console.log('Добавлено в страницу с айди:', selectedPageId)
    dispatch(closeMovePageToModal())
  }
  const onMovePageToCommonPages = (): void => {
    console.log(`Страница с айди ${id} добавлена в common pages`)
    dispatch(closeMovePageToModal())
  }
  const handleClickOutside = (): void => {
    dispatch(closeMovePageToModal())
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <Fragment>
      <Modal>
        <StyledModal ref={modalRef} coords={coords}>
          <Container>
            <InputContainer>
              <OutlineInput
                placeholder='Search a page to move to...'
                inputValue={inputValue}
                onChange={onChangeInputValue}
                onClear={onClearInput}
              />
            </InputContainer>
            <Content>
              <CommonPagesItem
                isActive={activeItem === 'Move to Common pages'}
                onClick={onMovePageToCommonPages}
                onMouseEnter={() => onSelectItem('Move to Common pages')}
              >
                <AvatarContainer>
                  <Avatar src={avatar} />
                </AvatarContainer>
                <MoveToTitle>
                  Move to <CommonPagesTitle>Common pages</CommonPagesTitle>
                </MoveToTitle>
              </CommonPagesItem>
              {workspacePages.map(({ id, title, icon, isHasIcon }) => (
                <MovePageToModalItem
                  key={id}
                  {...{ id, icon, title, isHasIcon }}
                  action={onMovePageToAnotherList}
                  activeItem={activeItem}
                  onSelect={onSelectItem}
                />
              ))}
            </Content>
          </Container>
        </StyledModal>
      </Modal>
    </Fragment>
  )
}

export default MovePageToModal
