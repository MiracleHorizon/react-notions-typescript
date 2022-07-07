import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { useInput } from 'hooks/useInput'
import Modal from '../ModalWrapper'
import SwitchDecorationNavbar from '../SwitchDecoration/Navbar'
import SwitchDecorationLists from '../SwitchDecoration/DecorLists'
import OutlineInput from 'shared/Inputs/OutlineInput'
import { changeIconPopupSelector } from 'redux/popupsSlice/selectors'
import { iconCategoriesSelector } from 'redux/pageDecorationSlice/selectors'
import { closeChangeIconPopup } from 'redux/popupsSlice/slice'
import { refreshIconCategory } from 'redux/pageDecorationSlice/slice'
import {
  PopupWrapper,
  ContentContainer,
  Content,
} from './ChangeIconPopup.styles'

const ChangePageIconPopup: React.FC = () => {
  const categories = useSelector(iconCategoriesSelector)
  const { coords } = useSelector(changeIconPopupSelector)
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const popupRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const handleClickOutside = (): void => {
    dispatch(closeChangeIconPopup())
    dispatch(refreshIconCategory())
  }

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Modal>
      <PopupWrapper coords={coords} ref={popupRef}>
        <SwitchDecorationNavbar categories={categories} purpose='icon' />
        <ContentContainer>
          <OutlineInput
            placeholder='Filter...'
            inputValue={inputValue}
            onChange={onChangeInputValue}
            onClear={onClearInput}
          />
          <Content>
            <SwitchDecorationLists />
          </Content>
        </ContentContainer>
      </PopupWrapper>
    </Modal>
  )
}

export default ChangePageIconPopup
