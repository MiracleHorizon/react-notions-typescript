import React, { FC, memo, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import { BlackFilledTooltip } from 'components/ui'

import { useAppDispatch } from 'redux/store'
import { ImgCover } from 'redux/types'
import { updatePage } from 'api/reduxAsyncThunks'
import { currentPageSelector } from 'redux/selectors'
import objectCopier from 'helpers/objectCopier'
import { ItemContainer, StyledItem } from './CoverGalleryItem.styles'

const CoverGalleryItem: FC<ImgCover> = memo(props => {
  const { tooltipTitle, tooltipDescription, coverImg } = props
  const pageCopy = objectCopier(useSelector(currentPageSelector))
  const appDispatch = useAppDispatch()

  const coverItemRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(coverItemRef)

  const onSelectPageCover = useCallback((): void => {
    pageCopy.coverInfo.coverUrl = coverImg

    appDispatch(updatePage(pageCopy))
  }, [appDispatch, pageCopy, coverImg])

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
      {/*  <BlackFilledTooltip*/}
      {/*    coords={{}}*/}
      {/*    title={tooltipTitle}*/}
      {/*    description={tooltipDescription}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  )
})

export default CoverGalleryItem
