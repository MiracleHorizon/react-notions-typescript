import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHover, useOnClickOutside } from 'usehooks-ts'

import DragCoverTooltip from 'shared/Tooltips/DragCover'
import CoverOptionsPanel from './CoverOptionsPanel'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { CoverWrapper, StyledCover } from './PageCover.styles'

const PageCover: React.FC = () => {
  const {
    coverInfo: { isHasCover, cover, coverType },
  } = useSelector(currentPageSelector)
  const [isRepositionEnabled, setRepositionEnabled] = useState<boolean>(false)
  const [coverPosition, setCoverPosition] = useState<number>(0)

  const coverWrapperRef = useRef<HTMLDivElement>(null)
  const coverRef = useRef<HTMLImageElement>(null)
  const isHovering = useHover(coverWrapperRef)

  // const initialPosition = useRef<number>(coverPosition)
  // const isRepositionStarted = useRef<boolean>(false)
  // const startPosition = useRef<number>(0)
  // const endPosition = useRef<number>(0)

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!isRepositionEnabled) return
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isRepositionEnabled) return
  }
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isRepositionEnabled) return
  }

  const handleClickOutside = (): void => setRepositionEnabled(false)

  useOnClickOutside(coverWrapperRef, handleClickOutside)

  return (
    <CoverWrapper
      ref={coverWrapperRef}
      isHasCover={isHasCover}
      isRepositionEnabled={isRepositionEnabled}
    >
      <StyledCover
        src={cover}
        ref={coverRef}
        {...{ cover, coverType, coverPosition }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      />
      {isRepositionEnabled && <DragCoverTooltip />}
      {isHasCover && (
        <CoverOptionsPanel
          {...{
            isHovering,
            isRepositionEnabled,
            setRepositionEnabled,
            setCoverPosition,
          }}
        />
      )}
    </CoverWrapper>
  )
}

export default PageCover
