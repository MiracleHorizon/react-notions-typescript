import React, { FC, memo, useCallback, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ContentTypeTooltip } from 'components/ui'

import { useAppDispatch } from 'redux/store'
import Props from './SelectContentTypeOption.types'
import { IListContentItem as Item } from 'models/content/content.types'
import { ItemConstructor } from 'features/Items'
import { updatePage } from 'api/reduxAsyncThunks'
import { closeContentTypesPopup } from 'redux/actions'
import { currentPageCopySelector } from 'redux/selectors'
import { tooltipsCoordsHandler } from 'helpers/coords/tooltipsCoordsHandler'
import * as Option from './SelectContentTypeOption.styles'

const SelectContentTypeOption: FC<Props> = memo(
  ({ title, description, imageUrl, parent, type, activeItem, onSelect }) => {
    const currentPageCopy = useSelector(currentPageCopySelector)
    const [isTooltipOpen, setTooltipOpen] = useState<boolean>(false)
    const optionRef = useRef<HTMLDivElement>(null)
    const appDispatch = useAppDispatch()
    const dispatch = useDispatch()

    const tooltipCoords = useMemo(() => {
      const optionRect = optionRef.current?.getBoundingClientRect()
      return tooltipsCoordsHandler.contentType(optionRect)
    }, [])

    const onClick = useCallback((): void => {
      dispatch(closeContentTypesPopup())
      // currentPageCopy.content.splice()

      const item = new ItemConstructor().create({
        parent: null,
        contentType: type,
        isComplete: false,
        isExpanded: false,
        dependencies: []
      })

      currentPageCopy.content = [...currentPageCopy.content, item]

      appDispatch(updatePage(currentPageCopy))
    }, [appDispatch, dispatch, currentPageCopy, type])

    const onMouseEnter = useCallback((): void => {
      setTooltipOpen(true)
      onSelect(title)
    }, [onSelect, title])

    const onMouseLeave = (): void => setTooltipOpen(false)

    return (
      <>
        <Option.Wrapper ref={optionRef}>
          <Option.Container
            isActive={activeItem === title}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
          >
            <Option.ImageContainer>
              <Option.Image src={imageUrl} />
            </Option.ImageContainer>
            <Option.TextContainer>
              <Option.Title>{title}</Option.Title>
              <Option.Description>{description}</Option.Description>
            </Option.TextContainer>
          </Option.Container>
        </Option.Wrapper>
        {isTooltipOpen && (
          <ContentTypeTooltip contentType={type} {...tooltipCoords} />
        )}
      </>
    )
  }
)

export default SelectContentTypeOption
