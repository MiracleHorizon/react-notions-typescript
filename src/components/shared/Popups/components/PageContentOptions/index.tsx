import React, { FC, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Popup from 'components/shared/Popups/index'
import {
  DeleteItem,
  DuplicateItem,
} from 'components/shared/Options/OptionsList/PageOptionItems'
import MoveToOptionItem from 'components/shared/Options/OptionsList/PageOptionItems/components/MoveToOptionItem'
import ChangeStylesItem from 'components/shared/Options/OptionsList/PageOptionItems/components/ChangeStylesItem'
import ChangesBar from 'components/shared/ChangesBar'

import { useSelectItem } from 'hooks/mouse/useSelectItem'
import { closeContentOptionsPopup } from 'redux/actions'
import {
  contentStylesPopupSelector,
  currentPageSelector,
} from 'redux/selectors'
import { Wrapper } from './PageContentOptionsPopup.styles'

const PageContentOptionsPopup: FC = () => {
  const { activeItem, onSelectItem } = useSelectItem('')
  const { updatedAt } = useSelector(currentPageSelector)
  const contentStylesPopup = useSelector(contentStylesPopupSelector)
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onMoveItemTo = useCallback((): void => {}, [])

  const handleClickOutside = (): void => {
    if (!contentStylesPopup.isOpen) {
      dispatch(closeContentOptionsPopup())
    }
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper ref={popupRef}>
        <>
          <DeleteItem
            destination='item'
            activeItem={activeItem}
            onSelect={onSelectItem}
          />
          <DuplicateItem activeItem={activeItem} onSelect={onSelectItem} />
          <MoveToOptionItem
            action={onMoveItemTo}
            activeItem={activeItem}
            onSelect={onSelectItem}
          />
          <ChangeStylesItem activeItem={activeItem} onSelect={onSelectItem} />
          <ChangesBar updatedAt={updatedAt} />
        </>
      </Wrapper>
    </Popup>
  )
}

export default PageContentOptionsPopup
