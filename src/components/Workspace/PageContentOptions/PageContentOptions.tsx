import React, { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as _ from 'lodash'

import PageDecorOption from './PageDecorOption/PageDecorOption'
import SwitchPageIconModal from 'shared/ModalWindows/SwitchIcon'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  coversListsSelector,
  isIconModalOpenSelector,
} from 'redux/pageDecorationSlice/selectors'
import { setIsIconModalOpen } from 'redux/pageDecorationSlice/slice'
import { setPageCover } from 'redux/workSpaceSlice/slice'
import { getAllCovers } from 'utils/helpers/getAllCovers'
import addIconSvg from 'assets/img/addIcon.svg'
import addCoverSvg from 'assets/img/cover.svg'
import addCommentSvg from 'assets/img/optionsImgs/comments.svg'
import {
  OptionsPanel,
  OptionsContainer,
  PageIconBlock,
  PageIcon,
  PageTitle,
} from './PageContentOptions.styles'

const PageContentOptions: React.FC = () => {
  const { id, title, icon, isHasCover, isHasIcon, isHasComments } =
    useSelector(currentPageSelector)
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
  const onAddRandomIcon = (): void => {} //! icon!

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
          {isSwitchPageIconModalOpen && <SwitchPageIconModal />}
        </Fragment>
      )}
      <OptionsContainer>
        {!isHasIcon && (
          <PageDecorOption
            icon={addIconSvg}
            optionTitle='icon'
            onClickAction={onAddRandomIcon}
          />
        )}
        {!isHasCover && (
          <PageDecorOption
            icon={addCoverSvg}
            optionTitle='cover'
            onClickAction={onAddRandomCover}
          />
        )}
        {!isHasComments && (
          <PageDecorOption icon={addCommentSvg} optionTitle='comment' />
        )}
      </OptionsContainer>
      <PageTitle ref={pageTitleRef}>{title}</PageTitle>
    </OptionsPanel>
  )
}

export default PageContentOptions
