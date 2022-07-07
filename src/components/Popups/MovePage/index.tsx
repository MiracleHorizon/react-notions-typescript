import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { useInput } from 'hooks/useInput'
import { useSelectActiveItem } from 'hooks/useSelectActiveItem'
import MoveToCommonPagesItem from './MoveToCommonPagesItem'
import MovePagePopupItem from './MovePagePopupItem'
import Modal from '../ModalWrapper'
import OutlineInput from 'shared/Inputs/OutlineInput'
import {
  currentPageSelector,
  workspacePagesSelector,
} from 'redux/workSpaceSlice/selectors'
import { movePagePopupSelector } from 'redux/popupsSlice/selectors'
import { closeMovePageToModal } from 'redux/popupsSlice/slice'
import { ActiveItem } from '../../../@types/generalTypes'
import {
  Wrapper,
  Container,
  InputContainer,
  Content,
} from './MovePagePopup.styles'

const MovePagePopup: React.FC = () => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const { id, title } = useSelector(currentPageSelector)
  const { activeItem, onSelectActiveItem } = useSelectActiveItem({ id, title })
  const { coords } = useSelector(movePagePopupSelector)
  const workspacePages = useSelector(workspacePagesSelector)
  const popupRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const onMovePageToAnotherList = (selectedPageId: number): void => {
    console.log('Добавлено в страницу с айди:', selectedPageId)
    dispatch(closeMovePageToModal())
  }

  const handleClickOutside = (): void => {
    dispatch(closeMovePageToModal())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Modal>
      <Wrapper ref={popupRef} coords={coords}>
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
              activeItem={activeItem as ActiveItem}
              onSelectActiveItem={onSelectActiveItem}
            />
            {workspacePages.map(({ id, title, iconInfo }) => (
              <MovePagePopupItem
                key={id}
                {...{ id, title, ...iconInfo }}
                action={onMovePageToAnotherList}
                activeItem={activeItem as ActiveItem}
                onSelectActiveItem={onSelectActiveItem}
              />
            ))}
          </Content>
        </Container>
      </Wrapper>
    </Modal>
  )
}

export default MovePagePopup
