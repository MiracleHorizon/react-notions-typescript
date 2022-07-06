import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ChangePageTitlePopup from 'shared/ModalWindows/ChangePageTitle'
import { changePageTitleModalSelector } from 'redux/modalsSlice/selectors'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { openChangePageTitlePopup } from 'redux/modalsSlice/slice'
import { coordsHandler } from 'shared/ModalWindows/ChangePageTitle/coordsHandler'
import { PageTitleContainer, Title, Icon } from './HeaderPageTitle.styles'

const HeaderPageTitle: React.FC = () => {
  const {
    id,
    title,
    iconInfo: { icon, isHasIcon },
  } = useSelector(currentPageSelector)
  const isChangePageTitlePopupOpen = useSelector(changePageTitleModalSelector)

  const pageTitleRef = useRef<HTMLDivElement>(null)
  const pageTitleRect = pageTitleRef.current?.getBoundingClientRect()

  const dispatch = useDispatch()
  const onOpenChangePageTitlePopup = (): void => {
    dispatch(openChangePageTitlePopup())
  }

  return (
    <>
      <PageTitleContainer
        ref={pageTitleRef}
        onClick={onOpenChangePageTitlePopup}
      >
        {isHasIcon && <Icon src={icon} alt='Page icon' />}
        <Title>{title}</Title>
      </PageTitleContainer>
      {isChangePageTitlePopupOpen && (
        <ChangePageTitlePopup
          {...{ id, title, icon, isHasIcon }}
          coords={coordsHandler.headerPopup(pageTitleRect)}
        />
      )}
    </>
  )
}

export default HeaderPageTitle
