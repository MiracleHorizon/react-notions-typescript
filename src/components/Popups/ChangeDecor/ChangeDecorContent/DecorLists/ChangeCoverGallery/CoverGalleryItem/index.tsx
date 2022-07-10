import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import { ImgCover } from 'redux/pageDecorationSlice/types'
import { setPageCover } from 'redux/workSpaceSlice/slice'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { ItemContainer, StyledItem } from './CoverGalleryItem.styles'
import Tooltip from 'shared/Tooltips/Tooltip'

const CoverGalleryItem: React.FC<ImgCover> = props => {
  const { tooltipTitle, tooltipDescription, coverImg } = props
  const { id } = useSelector(currentPageSelector)
  const dispatch = useDispatch()

  const coverItemRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(coverItemRef)

  const onSelectPageCover = (): void => {
    dispatch(setPageCover({ cover: coverImg, id }))
  }

  return (
    <>
      <ItemContainer ref={coverItemRef}>
        <StyledItem
          draggable={false}
          src={coverImg}
          onClick={onSelectPageCover}
        />
      </ItemContainer>
      {/*{isHovering && (*/}
      {/*  <Tooltip*/}
      {/*    coords={{}}*/}
      {/*    title={tooltipTitle}*/}
      {/*    description={tooltipDescription}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  )
}

export default CoverGalleryItem
