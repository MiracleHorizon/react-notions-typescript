import React, { FC, memo, useCallback, useMemo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'

import { ChangePageIconTooltip } from 'components/ui'
import { EmptyPageIconSvg } from 'components/ui/SVG'

import Props from './ItemIcon.types'
import { INotionPage } from 'redux/types'
import {
  openChangeIconPopup,
  setChangeIconPopupCoords,
  setChangeIconPopupPage,
} from 'redux/actions'
import { changeIconPopupCoordsHandler } from 'utils/coordsHandlers'
import { IconBlock, PageIcon } from './ItemIcon.styles'

const PagesListItemIcon: FC<INotionPage> = memo(props => {
  const iconRef = useRef<HTMLDivElement>(null)
  const iconRect = iconRef.current?.getBoundingClientRect()
  const isHovering = useHover(iconRef)
  const dispatch = useDispatch()

  const changeIconPopupCoords = useMemo(() => {
    return changeIconPopupCoordsHandler.sidebar(iconRect)
  }, [iconRect])

  const onOpenChangeIconPopup = useCallback(
    (e: React.MouseEvent): void => {
      e.stopPropagation()

      console.log(props)
      dispatch(openChangeIconPopup())
      dispatch(setChangeIconPopupPage(props))
      dispatch(setChangeIconPopupCoords(changeIconPopupCoords))
    },
    [dispatch, changeIconPopupCoords, props]
  )

  return (
    <>
      <IconBlock ref={iconRef} onClick={onOpenChangeIconPopup}>
        {props.iconInfo.isHasIcon ? (
          <PageIcon src={props.iconInfo.iconUrl} alt='Icon' />
        ) : (
          <EmptyPageIconSvg width={16} height={16} transparency={0.85} />
        )}
      </IconBlock>
      {isHovering && <ChangePageIconTooltip rect={iconRect} />}
    </>
  )
})

export default PagesListItemIcon
