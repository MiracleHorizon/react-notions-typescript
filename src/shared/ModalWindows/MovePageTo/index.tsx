import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { useInput } from 'hooks/useInput'
import { useSelectActiveItem } from 'hooks/useSelectActiveItem'
import MoveToCommonPagesItem from './MoveToCommonPagesItem'
import MovePageToModalItem from './MovePageToModalItem'
import Modal from '../ModalWrapper'
import OutlineInput from 'shared/Inputs/OutlineInput'
import {
  currentPageSelector,
  workspacePagesSelector,
} from 'redux/workSpaceSlice/selectors'
import { movePageToModalSelector } from 'redux/modalsSlice/selectors'
import { closeMovePageToModal } from 'redux/modalsSlice/slice'
import {
  StyledModal,
  Container,
  InputContainer,
  Content,
} from './MovePageToModal.styles'

const MovePageToModal: React.FC = () => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const { id, title } = useSelector(currentPageSelector)
  const { activeItem, onSelectActiveItem } = useSelectActiveItem({ id, title })
  const { coords } = useSelector(movePageToModalSelector)
  const workspacePages = useSelector(workspacePagesSelector)
  const modalRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onMovePageToAnotherList = (selectedPageId: number): void => {
    console.log('Добавлено в страницу с айди:', selectedPageId)
    dispatch(closeMovePageToModal())
  }

  const handleClickOutside = (): void => {
    dispatch(closeMovePageToModal())
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <>
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
              <MoveToCommonPagesItem
                activeItem={activeItem!}
                onSelectActiveItem={onSelectActiveItem}
              />
              {workspacePages.map(
                ({ id, title, iconInfo: { icon, isHasIcon } }) => (
                  <MovePageToModalItem
                    key={id}
                    {...{ id, title, icon, isHasIcon }}
                    action={onMovePageToAnotherList}
                    activeItem={activeItem!}
                    onSelectActiveItem={onSelectActiveItem}
                  />
                )
              )}
            </Content>
          </Container>
        </StyledModal>
      </Modal>
      {/*{<MoveToTrashAlert isActive={} />}*/}
    </>
  )
}

export default MovePageToModal
