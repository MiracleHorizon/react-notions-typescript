import React, { FC, memo, useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHover, useOnClickOutside } from 'usehooks-ts'

import CoverOptionsPanel from './CoverOptionsPanel'
import { DragCoverTooltip } from 'components/ui'
import { currentPageSelector } from 'redux/selectors'
import { CoverWrapper, StyledCover } from './PageCover.styles'

const PageCover: FC = memo(() => {
  const {
    coverInfo: { isHasCover, coverUrl },
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

  const onMouseDown = useCallback(
    (e: React.MouseEvent): void => {
      e.preventDefault()
      if (!isRepositionEnabled) return
    },
    [isRepositionEnabled]
  )

  const onMouseMove = useCallback(
    (e: React.MouseEvent): void => {
      if (!isRepositionEnabled) return
    },
    [isRepositionEnabled]
  )

  const onMouseUp = useCallback(
    (e: React.MouseEvent): void => {
      if (!isRepositionEnabled) return
    },
    [isRepositionEnabled]
  )

  const handleClickOutside = (): void => setRepositionEnabled(false)

  useOnClickOutside(coverWrapperRef, handleClickOutside)

  return (
    <>
      {isHasCover && (
        <CoverWrapper
          ref={coverWrapperRef}
          isHasCover={isHasCover}
          isRepositionEnabled={isRepositionEnabled}
        >
          <StyledCover
            src={coverUrl}
            ref={coverRef}
            cover={coverUrl}
            coverPosition={coverPosition}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          />
          {isRepositionEnabled && <DragCoverTooltip />}
          <CoverOptionsPanel
            {...{
              isHovering: true,
              isRepositionEnabled,
              setRepositionEnabled,
              setCoverPosition,
            }}
          />
        </CoverWrapper>
      )}
    </>
  )
})

export default PageCover
