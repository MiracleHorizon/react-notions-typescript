import React, { FC, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import Popup from 'components/shared/Popups/index'
import DiscussionOption from 'components/shared/Options/CustomizePopupOption/components/DiscussionOption'
import { EmptyPageIconSvg } from 'components/ui/SVG'

import { closePageCustomizePopup } from 'redux/actions'
import { currentPageSelector } from 'redux/selectors'
import {
  Wrapper,
  Header,
  TitleContainer,
  Icon,
  Title,
  SectionsContainer,
  SectionsTitleContainer,
  SectionsTitle,
} from './PageCustomizePopup.styles'
import CommentsOption from '../../../Options/CustomizePopupOption/components/CommentsOption'

const PageCustomizePopup: FC = () => {
  const {
    title,
    iconInfo: { isHasIcon, iconUrl },
  } = useSelector(currentPageSelector)
  const popupRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const handleClickOutside = useCallback((): void => {
    dispatch(closePageCustomizePopup())
  }, [dispatch])

  useOnClickOutside(popupRef, handleClickOutside)

  return (
    <Popup>
      <Wrapper ref={popupRef}>
        <Header>
          <TitleContainer>
            Page view for
            <Title>
              {isHasIcon ? <Icon src={iconUrl} /> : <EmptyPageIconSvg />}
              {title}
            </Title>
          </TitleContainer>
        </Header>
        <SectionsContainer>
          <SectionsTitleContainer>
            <SectionsTitle>Sections</SectionsTitle>
          </SectionsTitleContainer>
          <DiscussionOption />
          <CommentsOption />
        </SectionsContainer>
      </Wrapper>
    </Popup>
  )
}

export default PageCustomizePopup
