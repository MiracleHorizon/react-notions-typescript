import React, { FC, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Popup from '../../index'
import MoveToCommonPagesItem from './MoveToCommonPagesItem'
import MovePagePopupItem from './MovePagePopupItem'
import { OutlineInput } from 'components/ui'

import { useInput } from 'hooks/keyboard/input'
import { useSelectActiveItem } from 'hooks/mouse/useSelectActiveItem'
import { ActiveItem } from 'types'
import { INotionPage } from 'redux/types'
import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import {
  pagesSelector,
  currentPageSelector,
  movePagePopupSelector,
} from 'redux/selectors'
import { closeMovePagePopup } from 'redux/actions'
import objectCopier from 'helpers/objectCopier'
import {
  Wrapper,
  Container,
  InputContainer,
  Content,
} from './MovePagePopup.styles'

const MovePagePopup: FC = memo(() => {
  const { _id, title } = useSelector(currentPageSelector)
  const { activeItem, onSelectActiveItem } = useSelectActiveItem({ _id, title })
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const { coords, entity } = useSelector(movePagePopupSelector)
  const pages = objectCopier(useSelector(pagesSelector))
  const popupRef = useRef<HTMLDivElement>(null)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const onMovePageToAnotherList = useCallback(
    (selectedPageId: string): void => {
      const parentPage = pages.find(
        (page: INotionPage) => page._id === selectedPageId
      )
      const oldParentPage = pages.find(
        (page: INotionPage) => page._id === entity.parentPageId
      )
      const childPage = pages.find(
        (page: INotionPage) => page._id === entity._id
      )

      if (!parentPage || !oldParentPage || !childPage) return

      parentPage.dependencies = [...parentPage.dependencies, childPage._id]
      childPage.parentPageId = parentPage._id
      childPage.pageSettings.isExpanded = false
      oldParentPage.dependencies = oldParentPage.dependencies.filter(
        (_id: string) => _id !== entity._id
      )

      appDispatch(updatePage(parentPage))
      appDispatch(updatePage(childPage))
      dispatch(closeMovePagePopup())
    },
    [appDispatch, dispatch, entity, pages]
  )

  const handleClickOutside = (): void => {
    dispatch(closeMovePagePopup())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper ref={popupRef} coords={coords}>
        <Container>
          <InputContainer>
            <OutlineInput
              renderFocusable
              placeholder='Search a page to move to...'
              inputValue={inputValue}
              onChange={onChangeInputValue}
              onClear={onClearInput}
            />
          </InputContainer>
          <Content>
            <MoveToCommonPagesItem
              onSelectActiveItem={onSelectActiveItem}
              activeItem={activeItem as ActiveItem}
            />
            {pages.map((page: INotionPage) => (
              <MovePagePopupItem
                key={page._id}
                action={onMovePageToAnotherList}
                activeItem={activeItem as ActiveItem}
                onSelectActiveItem={onSelectActiveItem}
                {...page}
              />
            ))}
          </Content>
        </Container>
      </Wrapper>
    </Popup>
  )
})

export default MovePagePopup
