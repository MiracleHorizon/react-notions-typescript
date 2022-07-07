import React, { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as _ from 'lodash'

import PageDecorOption from './PageDecorOption'
import ChangePageIconPopup from 'components/Popups/SwitchIcon'
import AddIconSVG from 'shared/SVG/AddIcon'
import AddCoverSVG from 'shared/SVG/AddCover'
import AddCommentSVG from 'shared/SVG/AddComment'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  coversListsSelector,
  isIconModalOpenSelector,
} from 'redux/pageDecorationSlice/selectors'
import { setIsIconModalOpen } from 'redux/pageDecorationSlice/slice'
import { setPageCover } from 'redux/workSpaceSlice/slice'
import { getAllCovers } from 'helpers/getAllCovers'
import {
  OptionsPanel,
  OptionsContainer,
  PageIconBlock,
  PageIcon,
  PageTitle,
} from './PageContentOptions.styles'

const PageContentOptions: React.FC = () => {
  const {
    id,
    title,
    iconInfo: { icon, isHasIcon },
    coverInfo: { isHasCover },
    commentsInfo: { isHasComments },
  } = useSelector(currentPageSelector)
  const covers = useSelector(coversListsSelector)
  const isSwitchPageIconModalOpen = useSelector(isIconModalOpenSelector)
  const pageTitleRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const onOpenSwitchPageIconModal = (): void => {
    dispatch(setIsIconModalOpen())
  }
  const onAddRandomCover = (): void => {
    dispatch(setPageCover({ cover: _.sample(getAllCovers(covers)), id }))
  }
  const onAddRandomIcon = (): void => {}
  const onAddComment = (): void => {}

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <OptionsPanel>
      {isHasIcon && (
        <Fragment>
          <PageIconBlock onClick={onOpenSwitchPageIconModal}>
            <PageIcon src={icon ? icon : ''} alt='Page icon' />
          </PageIconBlock>
          {isSwitchPageIconModalOpen && <ChangePageIconPopup />}
        </Fragment>
      )}
      <OptionsContainer>
        {!isHasIcon && (
          <PageDecorOption
            IconSVG={AddIconSVG}
            optionTitle='icon'
            onClickAction={onAddRandomIcon}
          />
        )}
        {!isHasCover && (
          <PageDecorOption
            IconSVG={AddCoverSVG}
            optionTitle='cover'
            onClickAction={onAddRandomCover}
          />
        )}
        {!isHasComments && (
          <PageDecorOption
            IconSVG={AddCommentSVG}
            optionTitle='comment'
            onClickAction={onAddRandomIcon}
          />
        )}
      </OptionsContainer>
      <PageTitle ref={pageTitleRef}>{title}</PageTitle>
    </OptionsPanel>
  )
}

export default PageContentOptions
