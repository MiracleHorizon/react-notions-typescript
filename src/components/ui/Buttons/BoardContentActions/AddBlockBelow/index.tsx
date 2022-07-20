import React, { FC, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import { AddBlockBelowTooltip } from 'components/ui/index'
import { PlusSvg } from 'components/ui/SVG'

import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import { currentPageCopySelector } from 'redux/selectors'
import { defaultContentItem } from 'models/content'
import { StyledButton } from './AddBlockBelowButton.styles'

const AddBlockBelowButton: FC<{ itemIndex: number }> = ({ itemIndex }) => {
  const currentPageCopy = useSelector(currentPageCopySelector)
  const appDispatch = useAppDispatch()

  const buttonRef = useRef<HTMLDivElement>(null)
  const isHovering = useHover(buttonRef)

  const onAddNewItemBelow = useCallback((): void => {
    currentPageCopy.content.splice(itemIndex, 0, defaultContentItem)

    appDispatch(updatePage(currentPageCopy))
  }, [appDispatch, currentPageCopy, itemIndex])

  return (
    <StyledButton role='button' ref={buttonRef} onClick={onAddNewItemBelow}>
      <PlusSvg />
      {/*{isHovering && <AddBlockBelowTooltip />}*/}
    </StyledButton>
  )
}

export default AddBlockBelowButton
